// 联合类型和类型保护
interface Bird {
  fly: boolean,
  sing:() => {}
}
interface Dog {
  fly: boolean;
  bank:() => {}
}

/**联合类型通过类型保护来解决问题 */
// 1.通过类型断言的方式，断言的类型必须是联合类型中的类型【eg：如果会飞，一定是小鸟，否则就是小狗】
function trainAnial(animal: Bird | Dog) {
  if(animal.fly) {
    (animal as Bird).sing();
  } else{
    (animal as Dog).bank();
  }
}
// or
function trainAnial1(animal: Bird | Dog) {
  if((<Bird>animal).fly) {
    (<Bird>animal).sing();
  } else{
    (<Dog>animal).bank();
  }
}

//2、in 语法进行类型保护
function trainAnial2(animal: Bird | Dog) {
 if ('sing' in animal) {
   animal.sing();
 } else {
   animal.bank();
 }
}

// 3、typeof来进行类型保护
function add(first: string|number, second: string|number): number {
  if (typeof first === 'string' || typeof second === 'string') {
    return Number(`${first}${second}`);
  }
  return first + second;
}

//4、通过instanceof语法来进行类型保护
class NumberObj {
  count: number = 0;
}
function addSecond(first: object|NumberObj, second: object|NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}