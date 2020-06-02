/**
 * 属性的装饰器
 * 1. 属性访问器没有第三个参数描述参数，但是可以通过返回一个描述，从而对属性进行控制
 * 2、对属性的值进行修改中注意，在装饰器中通过target[key]进行修改的是class原型的是属性，但是在获取这个值的时候，是先访问实例上的属性值的；
 * 
 */

 // name修改的不是实例上的name，而是原型上的属性
function nameDecorator(target: any, key: string): any {
    console.log(target, key);
    target[key] = 'lee'; // 这个是在原型上的属性
    // const description: PropertyDescriptor = {
    //     writable: false
    // };
    // return description;
}


class Test5 {
    @nameDecorator
    public name: string = 'guoguo' // 这个是在实例上的属性
}
const test5 = new Test5();
// test5.name = '123';
console.log(test5.name);

console.log((test5 as any).__proto__.name);


