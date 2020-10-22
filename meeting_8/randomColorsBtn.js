function getRandomColorsBtn(wrapper, btnsCount) {
  for (let i of btnsCount) {
    if (i > btnsCount) break;
    function getRandomChannel() {
      return Math.floor(Math.random() * 255);
    }
    function getRandomColor() {
      return `rgb(${getRandomChannel()}, ${getRandomChannel()}, ${getRandomChannel()})`;
    }

    function randomColorBtn(wrrapper) {
      const btn = document.createElement("button");

      wrrapper.append(btn);
      btn.textContent = "hello";

      btn.addEventListener("click", function () {
        const color = getRandomColor();
        btn.style.backgroundColor = color;
      });
    }
    randomColorBtn(document.querySelector("body"));
  }
}

getRandomColorsBtn(querySelector("body"), 10);
