const STATUSES = {
  completed: 0,
  active: 1,
  removed: 2,
};

const itemArray = Array.from(localStorage);

const createNewEl = (el, elClass = "", elType, elText) => {
  const elemNew = document.createElement(el);
  elemNew.className = elClass;
  elemNew.type = elType;
  elemNew.textContent = elText;
  return elemNew;
};

const handleLiMouseover = (li, span) => {
  li.addEventListener("mouseover", () => {
    span.classList.remove("invisible");
  });
};

const handleLiMouseout = (li, span) => {
  li.addEventListener("mouseout", () => {
    span.classList.add("invisible");
  });
};

const handleSpanClick = (span, li) => {
  span.addEventListener("click", () => {
    li.remove();
    counterNum.textContent === "2"
      ? (counterTxt.textContent = "item left")
      : (counterTxt.textContent = "items left");
    if (li.todoId === JSON.parse(localStorage[li.todoId]).id)
      localStorage.setItem(
        li.todoId,
        JSON.stringify(newStatusDeleted()[li.todoId])
      );
    itemArray[li.todoId] = JSON.stringify(newStatusDeleted()[li.todoId]);
    if (!li.classList.contains("done")) {
      counterNum.textContent = parseInt(counterNum.textContent) - 1;
    }
  });
};

const handleSpanSecondClick = (toggleStatusSpas, li) => {
  toggleStatusSpas.addEventListener("click", () => {
    if (!li.classList.contains("done")) {
      li.classList.remove("active");
      li.classList.add("done");

      itemArray[li.todoId] = JSON.stringify(newStatusFalse()[li.todoId]);

      localStorage.setItem(
        li.todoId,
        JSON.stringify(newStatusFalse()[li.todoId])
      );
      counterNum.textContent = parseInt(counterNum.textContent) - 1;
    } else {
      li.classList.remove("done");
      li.classList.add("active");

      itemArray[li.todoId] = JSON.stringify(newStatusTrue()[li.todoId]);

      localStorage.setItem(
        li.todoId,
        JSON.stringify(newStatusTrue()[li.todoId])
      );
      counterNum.textContent = parseInt(counterNum.textContent) + 1;
    }
    counterNum.textContent === "1"
      ? (counterTxt.textContent = "item left")
      : (counterTxt.textContent = "items left");
  });
};

const newStatusFalse = () => {
  const newValArr = [];
  const values = Array.from(localStorage);
  values.forEach((value) => {
    const newValue = JSON.parse(value);
    newValue.status = STATUSES.completed;
    newValArr.push(newValue);
  });

  return newValArr;
};
const newStatusTrue = () => {
  const newValArr = [];
  const values = Array.from(localStorage);
  values.forEach((value) => {
    const newValue = JSON.parse(value);
    newValue.status = STATUSES.active;
    newValArr.push(newValue);
  });

  return newValArr;
};
const newStatusDeleted = () => {
  const newValArr = [];
  const values = Array.from(localStorage);
  values.forEach((value) => {
    const newValue = JSON.parse(value);
    newValue.status = STATUSES.removed;
    newValArr.push(newValue);
  });

  return newValArr;
};

const renderTitle = () => {
  const div = createNewEl("div", "title_container", "", "");
  const h1 = createNewEl("h1", "title", "", "todos");
  div.appendChild(h1);
  document.body.appendChild(div);
};

const renderUl = () => {
  const ul = createNewEl("ul", "", "", "");

  return ul;
};
const ul = renderUl();

const renderLi = (text, id, status = 1) => {
  const li = createNewEl("li", `list ${status ? "active" : "done"}`, "", text);
  li.todoId = id;

  const span = createNewEl("span", "cross", "", "");
  const span2 = createNewEl("span", "to_change", "", "");
  span.classList.add("invisible");
  li.appendChild(span);
  li.appendChild(span2);

  handleLiMouseover(li, span);
  handleLiMouseout(li, span);
  handleSpanClick(span, li);
  handleSpanSecondClick(span2, li);
  clearButton.addEventListener("click", () => {
    if (li.classList.contains("done")) {
      li.remove();
      localStorage.setItem(
        li.todoId,
        JSON.stringify(newStatusDeleted()[li.todoId])
      );
      itemArray[li.todoId] = JSON.stringify(newStatusDeleted()[li.todoId]);
    }
  });

  return li;
};
const renderCounterNum = () => {
  const span = createNewEl("span", "items", "", 0);
  return span;
};
const counterNum = renderCounterNum();

const renderCounterTxt = () => {
  const p = createNewEl("p", "items", "", "items left");
  return p;
};
const counterTxt = renderCounterTxt();

const renderInput = () => {
  const input = createNewEl("input", "new-todo", "text", "");
  input.placeholder = "What needs to be done?";
  document.body.appendChild(input);

  input.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && input.value !== "") {
      const item = {
        value: input.value,
        status: STATUSES.active,
        id: localStorage.length,
      };
      itemArray.push(JSON.stringify(item));
      localStorage.setItem(localStorage.length, JSON.stringify(item));

      input.value = "";
      const value = JSON.parse(
        localStorage.getItem(itemArray.length - 1)
      ).value;
      ul.appendChild(renderLi(value, itemArray.length - 1));
      counterNum.textContent = parseInt(counterNum.textContent) + 1;
      if (counterNum.textContent === "1") {
        counterTxt.textContent = "item left";
      } else {
        counterTxt.textContent = "items left";
      }
    }
  });
  return input;
};

const renderFooter = () => {
  const div2 = createNewEl("div", "footer", "", "");
  div2.append(renderCounter());
  div2.appendChild(allButton);
  div2.appendChild(activeButton);
  div2.appendChild(completedButton);
  div2.appendChild(clearButton);

  document.body.appendChild(div2);
};

const renderCounter = () => {
  const div = createNewEl("div", "items_conteiner", "", "");
  div.appendChild(counterNum);
  div.appendChild(counterTxt);
  return div;
};

const removeUl = () => {
  ul.remove();
};

const renderButton = (text, elClass) => {
  const button = createNewEl("button", `button ${elClass}`, "", text);

  return button;
};

const allButton = renderButton("All", "all clicked");
const activeButton = renderButton("Active", "active");
const completedButton = renderButton("Completed", "completed");
const clearButton = renderButton("Clear completed", "clear");

allButton.addEventListener("click", () => {
  const lis = Array.from(ul.children);
  ul.textContent = "";
  const newArr = itemArray.filter((item) => {
    if (JSON.parse(item).status !== 2) {
      return itemArray;
    }
  });

  newArr.forEach((item) => {
    const parsedItem = JSON.parse(item);
    ul.appendChild(
      renderLi(parsedItem.value, parsedItem.id, parsedItem.status)
    );
  });

  lis.forEach((li) => {
    if (
      li.todoId === JSON.parse(localStorage[li.todoId]).id &&
      JSON.parse(localStorage[li.todoId]).status === 0
    ) {
      li.classList.remove("acive");
      li.classList.add("done");
    }
  });

  completedButton.classList.remove("clicked");
  activeButton.classList.remove("clicked");
  allButton.classList.add("clicked");
  clearButton.classList.remove("clicked");
});

activeButton.addEventListener("click", () => {
  const activeArr = itemArray.filter((item) => {
    if (JSON.parse(item).status === 1) {
      return itemArray;
    }
  });

  ul.textContent = "";
  activeArr.forEach((item) => {
    const parsedItem = JSON.parse(item);
    ul.appendChild(
      renderLi(parsedItem.value, parsedItem.id, parsedItem.status)
    );
  });

  activeButton.classList.add("clicked");
  allButton.classList.remove("clicked");
  clearButton.classList.remove("clicked");
  completedButton.classList.remove("clicked");
});

completedButton.addEventListener("click", () => {
  const activeArr = itemArray.filter((item) => {
    if (JSON.parse(item).status === 0) {
      return itemArray;
    }
  });

  ul.textContent = "";
  activeArr.forEach((item) => {
    const parsedItem = JSON.parse(item);
    ul.appendChild(
      renderLi(parsedItem.value, parsedItem.id, parsedItem.status)
    );
  });
  completedButton.classList.add("clicked");
  activeButton.classList.remove("clicked");
  allButton.classList.remove("clicked");
  clearButton.classList.remove("clicked");
});

const renderFooterLower = () => {
  const footer = createNewEl("footer", "", "", "");
  const div_footer = createNewEl("div", "footer_conteiner", "", "");
  const footer_p = createNewEl("p", "", "", "Double-click to edit a todo");
  const footer_p2 = createNewEl(
    "p",
    "",
    "",
    "Created by Miguel Camba, Addy Osmani"
  );
  const footer_p3 = createNewEl("p", "", "", "Part of TodoMVC");

  div_footer.appendChild(footer_p);
  div_footer.appendChild(footer_p2);
  div_footer.appendChild(footer_p3);

  footer.appendChild(div_footer);
  document.body.appendChild(footer);
};

const renderTodos = () => {
  renderTitle();
  renderInput().after(ul);
  renderFooter();
  renderFooterLower();
};
const afterOnload = () => {
  window.onload = () => {
    const newArr = itemArray.filter((item) => {
      if (JSON.parse(item).status !== 2) {
        return itemArray;
      }
    });
    newArr.forEach((item) => {
      let parsedIten = JSON.parse(item);
      ul.appendChild(
        renderLi(parsedIten.value, parsedIten.id, parsedIten.status)
      );
    });
    let trueArr = [];
    itemArray.forEach((item) => {
      if (JSON.parse(item).status === 1) {
        trueArr.push(item);
      }
    });
    counterNum.textContent = trueArr.length;
  };
};

renderTodos();
afterOnload();
