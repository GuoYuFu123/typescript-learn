// 静态属性 getter和setter方法

/**
 * 一般的private的私有属性，建议属性前面加上_, 保护私有属性; eg: _name
 */

class Person {
  constructor (private _name: string){}
  get name() {
    return this._name + " guoguo";
  }
  set name(name: string) {
    const realName = name.split(' ')[0];
    this._name = realName
  }
}

const person = new Person('lee');
console.log(person.name)
person.name = "dasad asdasd "
console.log(person.name)


// 设计模式中的单例模式

// 1.构造器是私有的
class Demo{
  private static instance: Demo;
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo();
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();