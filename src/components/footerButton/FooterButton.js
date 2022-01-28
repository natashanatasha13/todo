import Element from "../element"
import { itemArray } from "../element"
import TodoListItem from "../listElement"
import TodoSpanButton from "../spanButton";
import { STATUSES } from "../../constants";
export default class TodoButton extends Element {
  constructor(elementClass, elementPlaceHolder, textContent, elementParent) {
    super(
      "button",
      elementClass,
      elementPlaceHolder,
      textContent,
      elementParent
    );
  }
  render() {
    this.elementParent.appendChild(this.element);
  }
  handlerAllButton(ul, button, counter, buttonCompleted, buttonActive) {
    this.element.addEventListener("click", () => {
      const allArr = itemArray.filter((item) => {
        if (JSON.parse(item).status !== STATUSES.deleted) { 
          return itemArray;
        }
      });

      ul.element.textContent = "";
      allArr.forEach((item) => {
        const parsedItem = JSON.parse(item);
        const newTodo = new TodoListItem(
          "li",
          `list ${parsedItem.status ? "active" : "done"}`,
          "",
          parsedItem.value,
          ul.element,
          parsedItem.id - 1,
          parsedItem.status
        );
        newTodo.mount();
        newTodo.render();
        const deleteButton = new TodoSpanButton(
          "cross invisible",
          "",
          "",
          newTodo.element
        );
        const toggleButton = new TodoSpanButton(
          "to_change",
          "",
          "",
          newTodo.element
        );

        deleteButton.mount();
        deleteButton.render();
        toggleButton.mount();
        toggleButton.render();
        newTodo.handleLiMouseover(deleteButton);
        newTodo.handleLiMouseout(deleteButton);
        newTodo.handleSpanClick(deleteButton, counter);
        newTodo.handleSpanToggleClick(toggleButton, counter);
        button.handlerClearCompletedButton(newTodo, counter, STATUSES.active);

        if (newTodo.element.classList.contains("done")) {
          toggleButton.element.classList.add("to_change_done");
        }
      });

      let trueArr = [];
      itemArray.forEach((item) => {
        if (JSON.parse(item).status === STATUSES.active) { 
          trueArr.push(item);
        }
      });
      counter.element.textContent = trueArr.length;

      this.element.classList.add("clicked");
      buttonCompleted.element.classList.remove("clicked");
      buttonActive.element.classList.remove("clicked");
      localStorage.setItem("currentFilter", "currentFilterAll");
    });
  }
  handlerActiveButton(ul, button, counter, buttonAll, buttonCompleted) {
    this.element.addEventListener("click", () => {
      const activeArr = itemArray.filter((item) => {
        if (JSON.parse(item).status === STATUSES.active) {
          return itemArray;
        }
      });
      console.log(activeArr);
      ul.element.textContent = "";
      activeArr.forEach((item) => {
        const parsedItem = JSON.parse(item);
        const newTodo = new TodoListItem(
          "li",
          `list ${parsedItem.status ? "active" : "done"}`,
          "",
          parsedItem.value,
          ul.element,
          parsedItem.id - 1,
          parsedItem.status
        );
        newTodo.mount();
        newTodo.render();
        const deleteButton = new TodoSpanButton(
          "cross invisible",
          "",
          "",
          newTodo.element
        );
        const toggleButton = new TodoSpanButton(
          "to_change",
          "",
          "",
          newTodo.element
        );
        deleteButton.mount();
        deleteButton.render();
        toggleButton.mount();
        toggleButton.render();
        newTodo.handleLiMouseover(deleteButton);
        newTodo.handleLiMouseout(deleteButton);
        newTodo.handleSpanClick(deleteButton, counter);
        newTodo.handleSpanToggleClick(toggleButton, counter);
        button.handlerClearCompletedButton(newTodo, counter, STATUSES.active);
      });

      counter.element.textContent = activeArr.length;

      buttonAll.element.classList.remove("clicked");
      this.element.classList.add("clicked");
      buttonCompleted.element.classList.remove("clicked");
      localStorage.setItem("currentFilter", "currentFilterActive");
    });
  }
  handlerCompletedButton(ul, button, counter, buttonAll, buttonActive) {
    this.element.addEventListener("click", () => {
      const doneArr = itemArray.filter((item) => {
        if (JSON.parse(item).status === STATUSES.done) {
          return itemArray;
        }
      });

      ul.element.textContent = "";
      doneArr.forEach((item) => {
        const parsedItem = JSON.parse(item);
        const newTodo = new TodoListItem(
          "li",
          `list ${parsedItem.status ? "active" : "done"}`,
          "",
          parsedItem.value,
          ul.element,
          parsedItem.id - 1,
          parsedItem.status
        );
        newTodo.mount();
        newTodo.render();
        const deleteButton = new TodoSpanButton(
          "cross invisible",
          "",
          "",
          newTodo.element
        );
        const toggleButton = new TodoSpanButton(
          "to_change",
          "",
          "",
          newTodo.element
        );
        deleteButton.mount();
        deleteButton.render();
        toggleButton.mount();
        toggleButton.render();
        newTodo.handleLiMouseover(deleteButton);
        newTodo.handleLiMouseout(deleteButton);
        newTodo.handleSpanClick(deleteButton, counter);
        newTodo.handleSpanToggleClick(toggleButton, counter);
        button.handlerClearCompletedButton(newTodo, counter, STATUSES.done);
        if (newTodo.element.classList.contains("done")) {
          toggleButton.element.classList.add("to_change_done");
        }
      });

      counter.element.textContent = doneArr.length;

      this.element.classList.add("clicked");
      buttonAll.element.classList.remove("clicked");
      buttonActive.element.classList.remove("clicked");
      localStorage.setItem("currentFilter", "currentFilterComplited");
    });
  }
  handlerClearCompletedButton(li, counter, value = STATUSES.active) { //const
    this.element.addEventListener("click", () => {
      if (li.element.classList.contains("done")) {
        li.element.remove();
        localStorage.setItem(
          li.todoId + 1,
          JSON.stringify(li.newStatus(STATUSES.deleted)[li.todoId])
        );

        itemArray[li.todoId] = JSON.stringify(li.newStatus(STATUSES.deleted)[li.todoId]);
        let trueArr = [];

        itemArray.forEach((item) => {
          if (JSON.parse(item).status === value) {
            trueArr.push(item);
          }
        });
        counter.element.textContent = trueArr.length;
      }
    });
  }
}