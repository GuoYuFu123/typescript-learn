// 基础类型 boolean number string void undefined symbol null

// 对象类型 {} class function []

const func = (string: string): number => {
  return Number(string);
}

const func1: (string: string) => number = (string) => {
  return Number(string)
}

const date: Date = new Date();

// 其他case
interface Person {
  name: string
}
const rawData = '{"name": "dell"}';
const newDate:Person = JSON.parse(rawData); 

// 一个变量在未来有
 let temp:(number | string) = 123;
 temp = "456";