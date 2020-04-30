/**
 * 类型判断分为 1.基础类型  2.
 */

//1、 基础类型 null undefined symbol boolean void
const count: number = 123;
const teacherName: string = 'dell'; // name是一个预留关键字

//2、对象类型  
const teacher: {
  name: string,
  age: number
} = {
  name: 'dell',
  age: 1
}

//  number 数组
const numbers: number[] = [1,2,3];

//  类
class Person {}
const dell: Person = new Person(); 

// 函数
const getFun: ()=>number =() => {
  return 1;
}
