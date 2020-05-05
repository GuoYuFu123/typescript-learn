/// <reference path="2-6命名空间namespace2.ts" />

// 编译之后就都成为全局变量了，后期会变得不可维护
/**
 * 在我们的项目中，只需要将Page变为全局变量暴露即可，通过namespace进行区块分离进行分离，类似模块化，通过export导出需要用的变量
 */

// class Header{
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerHTML="this is header";
//     document.body.append(elem)
//   }
// }
// class Content{
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerHTML="this is content";
//     document.body.append(elem)
//   }
// }
// class Footer{
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerHTML="this is footer";
//     document.body.append(elem)
//   }
// }
// class Page {
//   constructor() {
//     new Header();
//     new Content();
//     new Footer();
//   }
// }


namespace Home {  
  export class Page {
    constructor() {
      new Component.Header();
      new Component.Content();
      new Component.Footer();
    }
  }
}

/*
亲爱的...我们已经在一起1000多个日夜，从当初的相识，相爱，到相守，一起走过的日子历历在目，
你的温柔，大方，贤惠，让我深深的感受到你对我的爱。
我想说的是： 遇上你是我今生的缘分，爱上你是我今生的幸福，守护你我今生的选择，
为你我今生无怨无悔，爱你一生一世不变
*/
