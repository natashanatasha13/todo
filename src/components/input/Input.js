import Element from "../element"
import { filter, itemArray } from "../element/Element.js"
import { myEventEmitter } from "../../eventEmitter/EventEmitter.js";
import { STATUSES } from "../../constants";
export default class TodoInput extends Element {
  constructor(elementClass, elementPlaceHolder, textContent, elementParent) {
    super(
      "input",
      elementClass,
      elementPlaceHolder,
      textContent,
      elementParent
    );
  }

  hadlerInput(ul, button, counter) {
    this.element.addEventListener("keydown", (event) => {
      if (event.code === "Enter" && this.element.value !== "") {
        const item = {
          value: this.element.value,
          status: STATUSES.active,
          id: itemArray.length + 1,
        };
        localStorage.setItem("currentFilter", "currentFilterAll");
        localStorage.setItem(localStorage.length, JSON.stringify(item));
        itemArray.push(localStorage.getItem(localStorage.length - 1));

        this.element.value = "";

        myEventEmitter.emit("createLI", button, counter)
        console.log(itemArray);
      }
    });
  }
}

