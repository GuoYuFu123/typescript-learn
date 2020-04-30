/**
 * 静态类型就表明在初始化就定义好了类型，定义的类型的就不会改变了
 */

interface point {
  x: number,
  y: number
}

const point: Point = {
  x: 1,
  y: 2
}

const counter: { x: number; } = { x: 2 };
counter.x = 1
