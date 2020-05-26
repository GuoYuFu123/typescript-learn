import { Router, Request, Response } from 'express';
import Crowller from './crowller';
import DellAnalyzer from './dellAnalyzer';
import fs from 'fs';
import path from 'path';

const router = Router();

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  }
}

router.get('/', (req: Request, res: Response) => {
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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : undefined;
  if (isLogin) {
    res.send('已经登录过')
  } else {
    if (password === '123') {
      if (req.session) {
        req.session.login = true;
        setTimeout(() => {
          res.redirect('/');
        }, 2000)
      }
    } else {
      res.send('登录失败')
    }
  }
})

router.get('/logout', (req: RequestWithBody, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
  }
  res.redirect('/');
  // res.send("已经退出了")
})

router.get('/getData', (req: RequestWithBody, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    // 爬虫url：http://www.dell-lee.com/typescript/demo.html?secret=secret
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const anlayzer = DellAnalyzer.getInstance();
    new Crowller(url, anlayzer);
    res.send('getData success')
  } else {
    res.send('请登录后进行爬取')
  }
})

router.get('/showData', (req: RequestWithBody, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    try {
      const position = path.resolve(__dirname, '../data/course.json');
      const result = fs.readFileSync(position, 'utf-8');
      res.json(JSON.parse(result));
    } catch (e) {
      res.send("尚未爬取到数据")
    }
  } else {
    res.send("用户尚未登录，请登录之后进行数据展示")
  }
})

router.get('/*', (req: Request, res: Response) => {
  res.send('404');
})
export default router;