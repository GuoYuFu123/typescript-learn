import 'reflect-metadata';
import { Request, Response } from 'express';
import { controller, get, post } from '../decorator';
import { getResponseData } from '../utils/utils'

interface BodyRequest extends Request {
    body: { [key: string]: string | undefined };
}

@controller('/')
export class LoginController {
    @post('/login')
    login(req: BodyRequest, res: Response) {
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
    }

    @get('/logout')
    logout(req: BodyRequest, res: Response) {
      if (req.session) {
        req.session.login = undefined;
      }
      res.json(getResponseData(true));
    }

    @get('/')
    home(req: BodyRequest, res: Response) {
        const isLogin = req.session ? req.session.login : false;
        if (isLogin) {
            res.send(`
            <html>
                <body>
                <a href='/getData'>爬取内容</a>
                <a href='/showData'>展示内容</a>
                <a href='/logout'>退出</a>
                </body>
            </html>
            `);
        } else {
            res.send(`
            <html>
                <body>
                <form method="post" action="/login">
                    <input type="password" name="password" />
                    <button>登陆</button>
                </form>
                </body>
            </html>
            `);
        }
    }
}