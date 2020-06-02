//因为上一节中对语法的提示不太友好，于是使用高级点的语法，本意就是将类进行继承，从而进行重写或者扩展

// new 就是一个构造函数，
function testDecorator() {
  return function <T extends new (...args: any[])=>{}>(constructor: T) {
    return class extends constructor {
      name = "lee";
      getName() {
        return this.name;
      }
    }
  }
}


const Test2 = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);


const test2 = new Test2("guoguo");
console.log(test2.getName());
(test2 as any).getName();

