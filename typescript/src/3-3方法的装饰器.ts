
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