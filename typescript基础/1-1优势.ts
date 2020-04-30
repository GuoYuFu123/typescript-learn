/**
 * 官网地址： https://www.tslang.cn/index.html
 * 1、 有更好的代码提示
 * 2、 更好的编辑器的代码提示
 * 3、 类型的判断，会让代码的语义和逻辑更加清晰
 */
/**
 *  |**| 运算符是es7的中缀运算符  ==  Math.pow(2, 2)
 *  url：https://github.com/tc39/proposal-exponentiation-operator
 */
type Point = { x: number, y: number }


function tsDemo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
console.log(tsDemo({ x: 3, y: 4 }))