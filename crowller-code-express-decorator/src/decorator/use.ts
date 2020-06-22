import 'reflect-metadata';
import { RequestHandler } from 'express';
import { CrowllerController, LoginController } from '../controller';

export function use(middleware: RequestHandler) {
  return function(target: CrowllerController | LoginController, key: string) {
    const orignMiddlewares = Reflect.getMetadata('middlewares', target, key) || [];
    orignMiddlewares.push(middleware);
    Reflect.defineMetadata('middlewares', orignMiddlewares, target, key);
  };
}
