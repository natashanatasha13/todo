
const filter = localStorage.getItem("currentFilter");
const itemArray = Array.from(localStorage);
itemArray.splice(0, 1);

export default class Element {
  constructor(
    element,
    elementClass,
    elementPlaceHolder,
    textContent,
    elementParent
  ) {
    this.element = element;
    this.elementClass = elementClass;
    this.elementPlaceHolder = elementPlaceHolder;
    this.textContent = textContent;
    this.elementParent = elementParent;
  }
  mount() {
    this.element = document.createElement(this.element);
    this.element.className = this.elementClass;
    this.element.textContent = this.textContent;
    this.element.placeholder = this.elementPlaceHolder;
  }
  render() {
    this.elementParent.appendChild(this.element);
    return this.element;
  }
}

export { filter, itemArray }