// 抽象类
// 抽象类就是将类中的公共部分进行抽象出来

/**
 * readonly 只能读不能改
 */
// class Person {
//   public readonly name: string
//   constructor(public name: string){
//     this.name = name;
//   }
// }
// const person = new Person('dell');

abstract class Geom{
  width: number;
  getType() {
    return "Gemo"
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 0;
  }
}
 
interface Teacher {
  name: string
}
interface Student {
  name: string,
  age: number
}
const teacher = {
  name: 'dell'
}
const student = {
  name: 'asd',
  age: 12
}
 const getUserInfo = (user: Teacher | Student ) => {
   console.log(user.name);
 }