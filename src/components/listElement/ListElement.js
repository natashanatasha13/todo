
import Element from "../element"
import { filter, itemArray } from "../element"
import { STATUSES } from "../../constants";

export default class TodoListItem extends Element {
  constructor(
    element,
    elementClass,
    elementPlaceHolder,
    textContent,
    elementParent,
    todoId,
    status
  ) {
    super(
      element,
      elementClass,
      elementPlaceHolder,
      textContent,
      elementParent
    );
    this.todoId = todoId;
    this.status = status;
  }
  handleLiMouseover(span) {
    this.element.addEventListener("mouseover", () => {
      span.element.classList.remove("invisible");
    });
  }
  handleLiMouseout(span) {
    this.element.addEventListener("mouseout", () => {
      span.element.classList.add("invisible");
    });
  }
  handleSpanClick(span, counter) {
    span.element.addEventListener("click", () => {
      this.element.remove();

      
        localStorage.setItem(
          this.todoId+1,
          JSON.stringify(this.newStatus(STATUSES.deleted)[this.todoId]) 
        );
        
      itemArray[this.todoId] = JSON.stringify(this.newStatus(STATUSES.deleted)[this.todoId]);
      if (!this.element.classList.contains("done")) {
        counter.element.textContent = parseInt(counter.element.textContent) - 1;
      }
    });
  }
  handleSpanToggleClick(toggleSpan, counter) {
    toggleSpan.element.addEventListener("click", () => {
      if (!this.element.classList.contains("done")) {
        this.element.classList.remove("active");
        this.element.classList.add("done");
        toggleSpan.element.classList.add("to_change_done");

        itemArray[this.todoId] = JSON.stringify(this.newStatus(STATUSES.done)[this.todoId]);

        localStorage.setItem(
          this.todoId + 1,
          JSON.stringify(this.newStatus(STATUSES.done)[this.todoId])
        );
        counter.element.textContent = parseInt(counter.element.textContent) - 1;
      } else {
        this.element.classList.remove("done");
        this.element.classList.add("active");
        toggleSpan.element.classList.remove("to_change_done");

        itemArray[this.todoId] = JSON.stringify(this.newStatus(STATUSES.active)[this.todoId]);

        localStorage.setItem(
          this.todoId + 1,
          JSON.stringify(this.newStatus(STATUSES.active)[this.todoId])
        );
        counter.element.textContent = parseInt(counter.element.textContent) + 1;
      }

    });
  }

  newStatus(status) {
    const newValArr = [];
    itemArray.forEach((value) => {
      const newValue = JSON.parse(value);
      newValue.status = status;
      newValArr.push(newValue);
    });

    return newValArr;
  }
}