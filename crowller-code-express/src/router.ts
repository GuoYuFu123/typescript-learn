import { Router, Request, Response, NextFunction } from 'express';
import Crowller from './utils/crowller';
import DellAnalyzer from './utils/dellAnalyzer';
import fs from 'fs';
import path from 'path';
import { getResponseData } from './utils/utils'

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  }
}

const router = Router();

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, '请先登录'));
  }
};

router.get('/', (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : undefined;
  if (isLogin) {
    res.send(`
    <html>
    <body>
      <a href="/getData">爬取数据</a>
      <a href="/showData">展示数据</a>
      <a href="/logout">退出</a>
    </body>
  </html> 
    `)
  } else {
    res.send(`
      <html>
        <body>
          <form method="post" action="/login">
            <input type="password" name="password"></input>
            <button>提交</button>
          </form>
        </body>
      </html> 
      `)
  }

})

router.post('/login', (req: BodyRequest, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : undefined;
  if (isLogin) {
    res.json(getResponseData(true));
  } else {
    if (password === '123') {
      if (req.session) {
        req.session.login = true;
        setTimeout(() => {
          res.redirect('/');
        }, 2000)
      }
    } else {
      res.json(getResponseData(false, '登录失败'));
    }
  }
})

router.get('/logout', (req: BodyRequest, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.json(getResponseData(true));
})

router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    // 爬虫url：http://www.dell-lee.com/typescript/demo.html?secret=secret
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const anlayzer = DellAnalyzer.getInstance();
    new Crowller(url, anlayzer);
    res.json(getResponseData("爬取成功"));
  } else {
    res.json(getResponseData(false, "用户尚未登录，请登录之后进行数据爬取"));
  }
})

router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    try {
      const position = path.resolve(__dirname, '../data/course.json');
      const result = fs.readFileSync(position, 'utf-8');
      res.json(getResponseData(JSON.parse(result)));
    } catch (e) {
      res.json(getResponseData(false, "暂无数据"));
    }
  } else {
    res.json(getResponseData(false, "用户尚未登录，请登录之后进行数据展示"));
  }
})

router.get('/*', (req: Request, res: Response) => {
  res.send('404');
})
export default router;