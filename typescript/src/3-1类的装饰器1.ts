// 类的装饰器
// 类的装饰器本身是一个函数
// 装饰器 通过 @ 符号来使用
// 装饰器的执行顺序是从下向上， 从右向左（从距离类的最近的装饰器开始执行）
// 普通函数的执行顺序是从上往下的
// 很多情况都是需要给装饰器进行传递参数的，这样，我们就需要进行一个工厂函数的包装，返回一个函数，类似于函数柯里化


// 接收的是类的构造器
function testDecorator2(constructor: any) {
  constructor.prototype.getName = () => {
    console.log('guoguo');
  }
  console.log('testDecorator');
}
function testDecorator1(constructor: any) {
  console.log("testDecorator1")
}

@testDecorator1
@testDecorator2
class Test {}
const test = new Test();
(test as any).getName();


/**eg */
// function test1Decorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('test1Decortor')
//       }
//     }
//   } else {
//     return function (constructor: any) {  }
//   }
// }


// @test1Decorator(true)
// class Test1{}
// const test1 = new Test1();
// (test1 as any).getName();


// eg 测试组合装饰器的执行顺序
/**
 * 2
 * 1
 * testDecorator1
 * testDecorator2
 */

// function testDecorator1() {
//   console.log('1')
//     return function(constructor: any) {
//       console.log('testDecorator1');
//     }
//   }
//   function testDecorator2() {
//     console.log('2')
//     return function(constructor: any) {
//       console.log('testDecorator2');
//     }
//   }

// @testDecorator2()
// @testDecorator1()
// class Test {}
// const test = new Test();
