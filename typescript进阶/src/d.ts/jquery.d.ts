// 定义全局变量
// declare var $:(params:() => void) => void;

interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}
 
// 定义全局函数
// 函数重载
declare function $(readFunc: () => void):void;
declare function $(selector:string):JqueryInstance;

// 全局如何对对象进行定义，以及如何对类进行定义，以及命名空间的嵌套
declare namespace ${
  namespace fn {
    class init{}
  }
}



// 使用接口的方式实现函数重载
// interface JQuery{
//   (readyFunc:() => void): void
//   (selector: string): JqueryInstance
// }
// declare var $: JQuery;

