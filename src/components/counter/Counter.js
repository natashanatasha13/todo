import Element from "../element";
export default
  class TodoCounter extends Element {
  constructor(elementClass, elementPlaceHolder, textContent, elementParent) {
    super("span", elementClass, elementPlaceHolder, textContent, elementParent);
  }
  render() {
    this.elementParent.appendChild(this.element);
  }
}
console.log('It works');