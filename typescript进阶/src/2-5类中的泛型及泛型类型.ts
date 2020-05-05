// 类中的泛型以及泛型类型[泛型约束]
// string[] | number[] | boolean[]
class DataManage {
  constructor(private data: string[] | number[]) { }
  getItem(index: number): number | string {
    return this.data[index];
  }
}

const data = new DataManage([1]);
data.getItem(0);

// 泛型
interface Item {
  name: string
}
/**
 * T继承了Item，那么T就有个Item中的name属性
 */
class DataManage1<T extends Item>{
  constructor(private data: T[]) { }
  getItem(index: number): string {
    return this.data[index].name;
  }
}
const data1 = new DataManage1([
  {
    name: 'guoguo'
  }
]);
data1.getItem(0);

/** 
 * 泛型继承number或者string，也就是说传入的只能是string或者number
*/
class DataManage2<T extends number | string>{
  constructor(private data: T[]) { }
  getItem(index: number): T {
    return this.data[index];
  }
}

// 函数中的泛型,如何使用泛型作为一个具体的函数注解
const func: <T>()=>string = <T>() => {
  return '12';
}
//eg
function hello<T>(params: T) {
  return params
};
const fct: <T>(params: T) => T = hello;