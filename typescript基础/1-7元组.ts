const arr: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ['a', 'b'];
const undefinedArr: undefined[] = [undefined, null];

//typee alias 类型别名
type User = { name: String, age: number };
class Teacher {
  name: String;
  age: number;
}
const objectArr: User[] = [
  new Teacher(),
  {
    name: 'guoguo',
    age: 18,
  }
]

// 元组 tuple 就是数量有限的数组，而且每一项都是固定的形式
// ×类型判断不能规范内容的指定类型
const teacherInfo: (number | string)[] = ["dell", '111', 1, '333'];
// 元组
const teacherInfoArr: [string, number, string] = ['1', 1, '1'];
//test csvwen用元组来表示就比较好了
const teacherList: ([string, number, string])[] = [
  ['detail', 1, '123'],
  ['detail', 1, '123'],
  ['detail', 1, '123'],
]
