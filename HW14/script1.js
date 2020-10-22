function createSelect(wrapper, options) {
  const items = [];
  let list;
  let title;
  let root;
  let activeOptionIndex = 0;
  let button1;
  let button2;
  let button3;

  function createRoot() {
    root = document.createElement("div");
    root.classList.add("select");
    wrapper.append(root);
  }

  function createTitle() {
    title = document.createElement("button");
    title.classList.add("select__title");
    title.textContent = "Select...";

    title.addEventListener("click", function () {
      titleClickHandler();
    });

    root.append(title);
  }

  function createList() {
    list = document.createElement("ul");
    list.classList.add("select__options");
    root.append(list);
  }

  function createItem() {
    for (let i = 0; i < options.length; i++) {
      const optionIndex = options[i];
      const item = document.createElement("li");
      item.classList.add("select__item");
      list.append(item);

      if (i === activeOptionIndex) {
        root.classList.add("select_active");
      }

      const option = document.createElement("button");
      option.classList.add("select__option");
      option.textContent = optionIndex;
      item.append(option);
      items.push(option);
    }
  }

  function titleClickHandler() {
    console.log("Clicked on Button");
    root.classList.toggle("select_active");
  }

  optionIndex.addEventListener("click", function () {
    title.textContent = optionIndex;
    root.classList.remove("select_active");
  });

  // button2.addEventListener("click", function () {
  //   button2.classList.add(".select__option_2");
  //   title.textContent = optionIndex;
  //   root.classList.remove("select_active");
  // });

  createRoot();
  createTitle();
  createList();
  createItem();
}

createSelect(document.querySelector("body"), [
  "USA",
  "Canada",
  "China",
  "Ukraine",
]);

createSelect(document.querySelector("body"), ["DOL", "CAD", "EURO", "UAH"]);

// (function () {
//   const selectElement = document.querySelector('.select');
//   const titelElement = selectElement.querySelector('.select__title');
//   const button1 = selectElement.querySelector('.select__option_1');
//   const button2 = selectElement.querySelector('.select__option_2');
//   const button3 = selectElement.querySelector('.select__option_3');

//   function titleClickHandler() {
//     console.log('Clicked on Button');
//     root.classList.toggle('select_active');
//   }

//   button1.addEventListener('click', function() {
//     console.log(button1.textContent);
//     title.textContent = button1.textContent;
//     root.classList.remove('select_active');
//   });

//   button2.addEventListener('click', function() {
//     console.log(button2.textContent);
//     title.textContent = button2.textContent;
//     root.classList.remove('select_active');
//   });

//   button3.addEventListener('click', function() {
//     console.log(button3.textContent);
//     title.textContent = button3.textContent;
//     root.classList.remove('select_active');
//   });

//   title.addEventListener('click', titleClickHandler)
// })();
