/**
 * 访问器的装饰器
 * 
 * get 和 set 不能同时都有装饰器，只能其中的一个进行装饰
 */
function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
}


class Test4 {
    private _name: string;

    constructor(name: string){
        this._name = name
    }

    get name() {
        return this._name;
    }
    @visitDecorator
    set name(name: string) {
        console.log('被调用')
        this._name = name;
    }
}
const test4 = new Test4('guoguo');
// test4.name = '123';

console.log(test4.name);


