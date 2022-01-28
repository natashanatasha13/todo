import Element from "../element"
import { filter, itemArray } from "../element"
import TodoListItem from "../listElement"
import TodoSpanButton from "../spanButton";
import { myEventEmitter } from "../../eventEmitter/EventEmitter.js";
import { STATUSES } from "../../constants"
export default class TodoList extends Element {

  constructor(
    elementClass,
    elementPlaceHolder,
    textContent,
    elementParent,
    elementChild
  ) {
    super("ul", elementClass, elementPlaceHolder, textContent, elementParent);
    this.elementChild = elementChild;
  }

  mount() {
    super.mount()
    myEventEmitter.on("createLI", this.renderList.bind(this))
  }

  renderList(button, counter) {
    console.log('here')
    const newTodo = new TodoListItem(
      "li",
      "list",
      "",
      JSON.parse(itemArray[itemArray.length - 1]).value,
      this.element,
      itemArray.length - 1,
      STATUSES.active
    );
    newTodo.mount();
    newTodo.render();
    const deleteButton = new TodoSpanButton(
      "cross invisible",
      "",
      "",
      newTodo.element
    );

    counter.element.textContent = parseInt(counter.element.textContent) + 1;
    const toggleButton = new TodoSpanButton("to_change", "", "", newTodo.element);
    deleteButton.mount();
    deleteButton.render();
    toggleButton.mount();
    toggleButton.render();
    newTodo.handleLiMouseover(deleteButton);
    newTodo.handleLiMouseout(deleteButton);
    newTodo.handleSpanClick(deleteButton, counter);
    newTodo.handleSpanToggleClick(toggleButton, counter);
    button.handlerClearCompletedButton(newTodo, counter, STATUSES.active);



  }

  afterOnload(button, counter, buttonActive, buttonCompleted, buttonAll) {
    window.onload = () => {
      let newArr = [];
      if (filter === "currentFilterActive") {
        newArr = itemArray.filter((item) => {
          if (JSON.parse(item).status === STATUSES.active) {
            return itemArray;
          }
        });
        buttonActive.element.classList.add("clicked");
        buttonAll.element.classList.remove("clicked");
        let trueArr = [];
        itemArray.forEach((item) => {
          if (JSON.parse(item).status === STATUSES.active) {
            trueArr.push(item);
          }
        });
        counter.element.textContent = trueArr.length;
        this.element.textContent = "";
        newArr.forEach((item) => {
          const parsedItem = JSON.parse(item);
          const newTodo = new TodoListItem(
            "li",
            `list ${parsedItem.status ? "active" : "done"}`,
            "",
            parsedItem.value,
            this.element,
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
      } else if (filter === "currentFilterComplited") {
        newArr = itemArray.filter((item) => {
          if (JSON.parse(item).status === STATUSES.done) {
            return itemArray;
          }
        });
        buttonCompleted.element.classList.add("clicked");
        buttonAll.element.classList.remove("clicked");
        let trueArr = [];
        itemArray.forEach((item) => {
          if (JSON.parse(item).status === STATUSES.done) {
            trueArr.push(item);
          }
        });
        counter.element.textContent = trueArr.length;
        this.element.textContent = "";
        newArr.forEach((item) => {
          const parsedItem = JSON.parse(item);
          const newTodo = new TodoListItem(
            "li",
            `list ${parsedItem.status ? "active" : "done"}`,
            "",
            parsedItem.value,
            this.element,
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
      } else {
        newArr = itemArray.filter((item) => {
          if (JSON.parse(item).status !== STATUSES.deleted) {
            return itemArray;
          }
        });

        buttonActive.element.classList.remove("clicked");
        buttonCompleted.element.classList.remove("clicked");
        buttonAll.element.classList.add("clicked");
        let trueArr = [];
        itemArray.forEach((item) => {
          if (JSON.parse(item).status === STATUSES.active) {
            trueArr.push(item);
          }
        });
        counter.element.textContent = trueArr.length;
        this.element.textContent = "";
        newArr.forEach((item) => {
          const parsedItem = JSON.parse(item);
          const newTodo = new TodoListItem(
            "li",
            `list ${parsedItem.status ? "active" : "done"}`,
            "",
            parsedItem.value,
            this.element,
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
      }
    };
  }
}

