import { Router } from 'express';
export const router = Router();

enum Method {
    get = 'get',
    post = 'post'
}

export function controller(target: any) {
    for(let key in target.prototype) {
        Reflect.getMetadata('path',target.prototype, key)
        // console.log(Reflect.getMetadata('path',target.prototype, key));
        const path = Reflect.getMetadata('path',target.prototype, key);
        const method: Method = Reflect.getMetadata('method',target.prototype, key);
        const handler = target.prototype[key];
        console.log(method, 'method')
        if(path && method && handler) {
            router[method](path, handler);
        }
    }
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


//为了方面获取请求的方法装饰器的工厂函数
function getRequestDecorator(type: string) {
    return function(path: string) {
        return function(target: any, key:string){
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', type, target, key);
        }
    }
}

export const get = getRequestDecorator('get');
export const post = getRequestDecorator('post');