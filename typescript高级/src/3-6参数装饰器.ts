/**
 * 参数的装饰器
 * 1、原型
 * 2、方法名
 * 3、参数所在的位置
 */


function paramDecorator(target: any, key: string,paramIndex:number): void {
   console.log(target, key, paramIndex  )
}


class Test6 {
    getInfo(@paramDecorator name: string, @paramDecorator age: number) {
        console.log(name, age);
    }
}
const test6 = new Test6();
test6.getInfo('guoguo', 18);


