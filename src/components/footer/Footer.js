import Element from "../element"


export default class TodoFooter extends Element {
    constructor(elementClass, elementPlaceHolder, textContent, elementParent) {
      super("div", elementClass, elementPlaceHolder, textContent, elementParent);
    }
  }