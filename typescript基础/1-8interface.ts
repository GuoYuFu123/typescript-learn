/**
 * interface 接口
 * 
 *1、 interface和type区别，类似，但是不完全一致
 * interface是一个对象，不能字面量进行赋值
 * type可以进行字面量赋值
 * 在开发中，建议使用interface
 * 
 * 2、?: 可有可无
 * 3、 readonly 只读属性
 * 4、接口可以进行继承
 * 5、接口可以定义一个函数
 */
interface Person {
  // readonly name: string;
  name: string;
  age ?: number;
  [propName: string]: any, // 可以设置任意属性的
  say():string;
}
interface Teacher extends Person {
  teach(): string
}
//  函数接口
interface SayHi {
  (word: string) : string
}


//  类型别名
type Person1 = Person;

const getPersonName = (person: Person):void => {
  console.log(person.name)
}

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name
}

const person = {
  name: 'dell',
  sex: 'men',
  say() {
    return "hello"
  },
  teach() {
    return "teacher"
  }

}

getPersonName(person);

//  通过函数直接传值，会进行强校验，必须和类型注解一样，可以设置一个缓存变量缓存一下
getPersonName({
  name: 'dell',
  sex: 'men',
  say() {
    return "hello"
  }
})

setPersonName(person, 'lee');

// 类接口
class User implements Person {
  name = "dell";
  say() {
    return "hello"
  }
}

const say: SayHi = (word: string) => {
  return "sayhi"
}