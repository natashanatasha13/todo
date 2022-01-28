import Element from "../element"

export default class TodoSpanButton extends Element {
    constructor(elementClass, elementPlaceHolder, textContent, elementParent) {
      super("span", elementClass, elementPlaceHolder, textContent, elementParent);
    }
  }
  