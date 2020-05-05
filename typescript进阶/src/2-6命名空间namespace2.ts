namespace Component{
  export class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerHTML = "this is header";
      document.body.append(elem)
    }
  }
  export class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerHTML = "this is content";
      document.body.append(elem)
    }
  }
  export class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerHTML = "this is footer";
      document.body.append(elem)
    }
  }
}