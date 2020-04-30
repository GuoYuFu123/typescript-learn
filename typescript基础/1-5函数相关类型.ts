// 定义函数的方式
function hello() { }
const hello1 = function () { }
const hello2 = () => { }


function add(first: number, second: number): number {
  return first + second;
}

const total = add(1, 2);

// void 空
function sayHello(): void {
  console.log('sayHello');
}

//  never 函数不可能执行完
function errorEmitter(): never {
  //1、 throw new Error('error');
  //2、 while(true) {}
  throw new Error('');
}

// 解构赋值的类型判断 的函数
function addFn({first, second}: {first: number, second: number}): number {
  return first + second
}
const addNum = addFn({ first: 1, second: 2 })