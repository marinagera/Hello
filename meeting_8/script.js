function getRandom() {
  return Math.floor(Math.random() * 256);
}

const test = getRandom();
console.log(test);

function getRandomColor() {
  const rbg =
    "rgba" + "(" + getRandom() + ", " + getRandom() + ", " + getRandom() + ")";

  return rbg;
}

const t = getRandomColor();
console.log(t);
