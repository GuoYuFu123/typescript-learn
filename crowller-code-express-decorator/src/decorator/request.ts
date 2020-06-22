import { CrowllerController, LoginController } from '../controller';

export enum Methods {
  get = 'get',
  post = 'post'
}


// export function get(path: string) {
//     return function(target: any, key:string){
//         // console.log(target, key, path)
//         // 在类的原型属性 'path' 上定义元数据，key 为 `path`，value 为 `path变量值`
//         Reflect.defineMetadata('path', path, target, key);
//         Reflect.defineMetadata('method', 'get', target, key);
//     }
// }

// export function post(path: string) {
//     return function(target: any, key:string){
//         // console.log(target, key, path)
//         // 在类的原型属性 'path' 上定义元数据，key 为 `path`，value 为 `path变量值`
//         Reflect.defineMetadata('path', path, target, key);
//         Reflect.defineMetadata('method', 'post', target, key);
//     }
// }

function getRequestDecorator(type: Methods) {
  return function(path: string) {
    return function(target: CrowllerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', type, target, key);
    };
  };
}

export const get = getRequestDecorator(Methods.get);
export const post = getRequestDecorator(Methods.post);