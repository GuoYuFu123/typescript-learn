// 函数泛型 generic 泛指的类型
/**
 * 
？ 表示不确定的类型
T (type) 表示具体的一个类型
K V (key value) 分别代表键值中的Key Value
E (element) 代表Element 
 */

function join<T>(first:T, second:T) {
  return `${first}${second}`
}
//指定泛型类型
join<string>('1', "2");
join<number>(1,2);
// 通过类型推断
join(1, 2);


//类型是传入的类型，但是参数是传入类型的数组
function map<T>(params:T[]){
  return params
}
function map1<T>(params:Array<T>){
  return params
}
map(['aa']);

//泛型还可以写2个泛型，甚至多个
function join1<T, F, B>(first:T, second:F, third: B) {
  return `${first}${second}`
}
join1<number, string, boolean>(1,'1', true);
join1(1,"1", true);
join1('1',1, false);

// 函数返回也是泛型
function anthorJoin<T>(first:T, second:T):T {
  return first;
}

