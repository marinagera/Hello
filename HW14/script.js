(function selector() {
  const OPTIONS = ["option_1", "option_2", "option_3"];
  const selectElement = [];
  let root;
  let title;
  let list;
  let item;

  //   const selectElement = document.querySelector(".select");
  //   const titelElement = selectElement.querySelector(".select__title");
  //   const button1 = selectElement.querySelector(".select__option_1");
  //   const button2 = selectElement.querySelector(".select__option_2");
  //   const button3 = selectElement.querySelector(".select__option_3");

  function createOptions() {
    for (let option of OPTIONS) {
      const option = document.createElement("button");
      option.classList.add("select__option", `select__${option}`);
      item.append(option);
    }
  }

  function createRoot() {
    root = document.createElement("div");
    root.classList.add("select");
    wrapper.append(root);
  }

  function createTitle() {
    title = document.createElement("button");
    title.classList.add("select__title");
    root.append(title);
  }

  function createList() {
    list = document.createElement("ul");
    list.classList.add("select__options");
    root.append(list);
  }

  function createListItems() {
    item = document.createElement("li");
    item.classList.add("select__item");
    list.append(item);
  }

  function titleClickHandler() {
    console.log("Clicked on Button");
    root.classList.toggle("select_active");
  }

  option.addEventListener("click", function () {
    console.log(option.textContent);
    title.textContent = option.textContent;
    root.classList.remove("select_active");
  });

  //   button2.addEventListener("click", function () {
  //     console.log(button2.textContent);
  //     title.textContent = button2.textContent;
  //     root.classList.remove("select_active");
  //   });

  //   button3.addEventListener("click", function () {
  //     console.log(button3.textContent);
  //     title.textContent = button3.textContent;
  //     root.classList.remove("select_active");
  //   });

  title.addEventListener("click", titleClickHandler);
  createOptions();
  createRoot();
  createTitle();
  createList();
  createListItems();
})();

selector(document.querySelector("body"));
