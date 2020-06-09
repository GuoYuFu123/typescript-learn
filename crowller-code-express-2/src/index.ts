import express, {Request, Response, NextFunction} from "express";
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controller/LoginController';
import { router } from './controller/decorator';

//1。express 库的类型定义文件 .d.ts的文件类型描述不准确
//2。 当使用中间件之后，对req和res 做个修改，实际上类型没有发生改变

const app = express();
// 中间件使用
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
  name: 'session',
  keys: ['teacher!lkjsldj'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
// 中间件问题, 其实中间件就是一个函数
// app.use((req: Request, res: Response, next: NextFunction ) => {
//   req.teacherName = 'guoguo';
//   next();
// })

app.use(router)

app.listen(7001, () => {
  console.log("server is running at 7001");
})