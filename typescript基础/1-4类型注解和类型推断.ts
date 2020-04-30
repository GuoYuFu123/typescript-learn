// type annotation 类型注解， 我们来告诉ts变量是什么类型
// type inference 类型推断，ts会自动的去尝试分析变量的内容

// 如果ts能推断出来的就可以不写类型注解，如果推断不出来，就主动去告诉类型注解
// 建议写类型注解

let num: number;
num = 123;

let numA = 123;

// 类型推断
const firstNum = 1;
const secondNum = 2;
const total = firstNum + secondNum;

function getTotal(numA:number, numB:number) {
  return numA + numB
}
getTotal(1,2);