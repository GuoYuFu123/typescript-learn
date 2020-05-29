
// 普通函数， target对应的是类的prototype
// 静态方法， target对应的是类的构造函数

// descriptor类似于definePrototype一样
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
    // descriptor.writable = false;
    descriptor.value = function() {
        return 'guoguo decorator';
    };
}

class Test3 {
    private name: string;

    constructor(name: string){
        this.name = name
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const test3 = new Test3('dell');
// test3.getName = () => {
//     return '123';
// };
console.log(test3.getName());


/**
 * eg：装饰器组合，执行顺序
 * 
 * 官方：这种是普通函数，接受参数的，显示普通函数执行，返回装饰器函数，因为装饰器函数是从下往上执行的，所以就是后面的顺序
 *        1、由上至下依次对装饰器表达式求值。
 *        2、求值的结果会被当作函数，由下至上依次调用。
 */
function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {} 
}
/**
f(): evaluated
g(): evaluated
g(): called
f(): called
 */
