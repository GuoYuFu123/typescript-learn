import 'reflect-metadata';
import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import { controller, get, post, use} from '../decorator';
import { getResponseData } from '../utils/utils'
import DellAnalyzer from '../utils/dellAnalyzer';
import Crowller from '../utils/crowller';

interface BodyRequest extends Request {
    body: { [key: string]: string | undefined };
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log('checkLogin use')
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, '请先登录'));
  }
};
const test = (req: Request, res: Response, next: NextFunction) => {
  console.log('test use')
  next();
};

@controller('/')
export class CrowllerController {
    @get("/getData")
    @use(checkLogin)
    @use(test)
    getData(req: BodyRequest, res: Response) {
        const secret = 'secretKey';
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
        const anlayzer = DellAnalyzer.getInstance();
        new Crowller(url, anlayzer);
        res.json(getResponseData("爬取成功"));
    }

    @get("/showData")
    @use(checkLogin)
    showData(req: BodyRequest, res: Response) {
      try {
        const position = path.resolve(__dirname, '../../data/course.json');
        const result = fs.readFileSync(position, 'utf-8');
        res.json(getResponseData(JSON.parse(result)));
      } catch (e) {
        res.json(getResponseData(false, "暂无数据"));
      }
    }
}