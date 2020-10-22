function collapsible(wrapper, title, contentText) {
  const root = document.createElement("div");
  const btn = document.createElement("button");
  const content = document.createElement("div");
  const p = document.createElement("p");

  root.append(btn);
  root.append(content);
  content.append(p);
  wrapper.append(root);
  p.textContent = contentText;
  btn.textContent = title;

  btn.classList.add("btn");
  content.classList.add("content");
}
collapsible(
  document.querySelector("body"),
  "Hello",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit facilis saepe pariatur facere omnis. Quidem, deleniti sapiente corporis accusamus quis porro, nam possimus mollitia veritatis quasi quod tempore aliquam."
);
