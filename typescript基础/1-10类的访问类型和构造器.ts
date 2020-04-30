// 类的修饰符 private protected public 访问类型
/**
 * public 允许在类的内部和外部进行调用
 * private  允许在类内进行使用
 * protected 允许在类内和继承的子类中内部进行使用
 * 
 * super 代表父类
 * 如果父类有构造器，子类继承了父类，那么我们就需要通过super() 主动去触发一下父类构造器
 */

class Person {
  public name: string;
  public sayHi() {
    console.log('hi')
  }
}

class Teacher extends Person {
  public sayBay() {
    this.name;
  }
}

const person = new Person();
person.name = "dell"
console.log(person.name);
person.sayHi();


// 构造器
class User {
  //  传统写法
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  // 简化写法 
  constructor(public name: string) {
    this.name = name;
  }
}
const user = new User('dell')
console.log(user.name);


class Men {
  constructor(public name: string) { }
}
class Student extends Men {
  constructor(public name: string, public age: number) {
    super(name);
  }
}
const student = new Student('dell', 12);