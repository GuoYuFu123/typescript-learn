interface Person {
  name: string;
  age: number;
  gender: string;
}

/**
 * 用extend的语法
 * keyof进行属性遍历，
 * T extends keyof Person 
 * 相当于  
 *  type name =  "name";
 *  T = name;
 *  type age =  "age";
 *  T = age;
 *  type gender =  "gender";
 *  T = gender;
 */
class Teacher {
  constructor(private info: Person) {

  }
  // getInfo(key: string) {
  //   if (key === 'name' || key === "age" || key === 'gender'){
  //     return this.info[key]
  //   }
  // }
  getInfo<T extends keyof Person>(key: T):Person[T] {
    return this.info[key]
  }
}

const teacher1 = new Teacher({
  name: "dell",
  age: 12,
  gender: 'mode'
})

const test = teacher1.getInfo('name');
console.log(test)