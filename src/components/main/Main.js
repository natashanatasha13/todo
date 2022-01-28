
import TodoTitle from "../title"
import TodoInput from "../input"
import TodoList from "../list"
import TodoFooter from "../footer";
import TodoButton from "../footerButton";
import TodoCounter from "../counter";



const root = document.querySelector("#root")

class Main {
  mount() {
    (this.newTitle = new TodoTitle("title", "", "todos", root)),
      this.newTitle.mount();
    (this.newInput = new TodoInput(
      "new-todo",
      "What needs to be done?",
      "",
      root
    )),
      this.newInput.mount();
    this.newUl = new TodoList("", "", "", root, "");
    this.newUl.mount();
    this.newFooter = new TodoFooter("footer", "", "", root);
    this.newFooter.mount();
    this.newFooterLower = new TodoFooter("lower_footer", "", "", root);
    this.newFooterLower.mount();
    this.newFooterLowest = new TodoFooter(
      "lowest_footer",
      "",
      "",
      root
    );
    this.newFooterLowest.mount();
    this.counterNum = new TodoCounter("items", "", 0, this.newFooter.element);
    this.counterNum.mount();
    this.counterTxt = new TodoCounter(
      "items",
      "",
      "items left",
      this.newFooter.element
    );
    this.counterTxt.mount();
    this.newButtonAll = new TodoButton(
      "button all clicked",
      "",
      "All",
      this.newFooter.element
    );
    this.newButtonAll.mount();
    this.newButtonActive = new TodoButton(
      "button active",
      "",
      "Active",
      this.newFooter.element
    );
    this.newButtonActive.mount();
    this.newButtonCompleted = new TodoButton(
      "button completed",
      "",
      "Completed",
      this.newFooter.element
    );
    this.newButtonCompleted.mount();
    this.newButtonClear = new TodoButton(
      "button clear",
      "",
      "Clear completed",
      this.newFooter.element
    );
    this.newButtonClear.mount();
  }

  render() {
    this.newTitle.render();
    this.newInput.render();
    this.newUl.render();
    this.newFooter.render();
    this.newFooterLower.render();
    this.newFooterLowest.render();
    this.counterNum.render();
    this.counterTxt.render();
    this.newButtonAll.render();
    this.newButtonActive.render();
    this.newButtonCompleted.render();
    this.newButtonClear.render();
  }
  handlers() {
    this.newButtonAll.handlerAllButton(
      this.newUl,
      this.newButtonClear,
      this.counterNum,
      this.newButtonCompleted,
      this.newButtonActive
    );
    this.newButtonActive.handlerActiveButton(
      this.newUl,
      this.newButtonClear,
      this.counterNum,
      this.newButtonAll,
      this.newButtonCompleted
    );
    this.newButtonCompleted.handlerCompletedButton(
      this.newUl,
      this.newButtonClear,
      this.counterNum,
      this.newButtonAll,
      this.newButtonActive
    );
    this.newInput.hadlerInput(this.newUl, this.newButtonClear, this.counterNum);

    this.newUl.afterOnload(
      this.newButtonClear,
      this.counterNum,
      this.newButtonActive,
      this.newButtonCompleted,
      this.newButtonAll
    );
  }
}

const renderAll = new Main();

export { renderAll }