//  类的定义和类的继承
/**
 * 1、类可以进行继承和方法的重写
 * 2、子类重写了父类的方法，子类怎么调用父类的方法，通过super进行调用父类的方法
 */
class Person {
  name = "dell";
  getName() {
    return this.name
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher'
  }
  getName() {
    return super.getName() + ':::lee'
  }
} 

const person = new Teacher();
console.log(person.getName())
console.log(person.getTeacherName())