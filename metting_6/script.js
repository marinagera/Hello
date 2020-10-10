// let name = prompt("Как Вас зовут? ");
// alert("Привет" + name);

// let value = prompt("В каком году появился язык JS?");
// if (value === "1995") {
//   alert("Верно!");
// }

// function open() {
//   const value = prompt("В каком году появился язык JS?");
//   if (value === "1995") {
//     alert("Верно!");
//   }
// }

function start() {
  let first = prompt("Введите число A");
  let numFirst = Number(first);
  let second = prompt("Введите число B");
  let numSecond = Number(second);
  let action = prompt("Введите действие");

  if (isNaN(numFirst) || isNaN(numSecond)) {
    alert("Вы ввели не число");
  } else {
    if (action === "+") {
      alert(numFirst + numSecond);
    } else if (action === "-") {
      alert(numFirst - numSecond);
    } else if (action === "*") {
      alert(numFirst * numSecond);
    } else {
      alert(numFirst / numSecond);
    }
  }
}

// function start() {
//   let first = prompt("Введите число A");
//   let numFirst = Number(first);
//   let second = prompt("Введите число B");
//   let numSecond = Number(second);
//   let action = prompt("Введите действие");

//   if (isNaN(numFirst) || isNaN(numSecond)) {
//     alert("Вы ввели не число!");
//   } else {
//     if (action === "+") {
//       alert(numFirst + numSecond);
//     } else if (action === "-") {
//       alert(numFirst - numSecond);
//     } else if (action === "*") {
//       alert(numFirst * numSecond);
//     } else {
//       alert(numFirst / numSecond);
//     }
//   }
// }

for (let i = 0; i < 10; i++) {
  console.log("Hello");
}

let inumber = Number(prompt("Enter number"));
while (isNaN(number)) {
  number = Number(prompt("Enter number"));
}
console.log(number ** 2);

let access = prompt("Кто там?", " ");
if (access === "admin") {
  let password = prompt("password", " ");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === " " || password === null) {
    alert("Отмена");
  } else {
    alert("Неверный пароль");
  }
} else if (access === " " || access === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

let randomBodyParts = ["Nase", "Ohre", "Augen"];
let randomAdjectives = ["dreckig", "stinkend", "blöd"];
let randomAnimals = ["лапы", "хвосты", "морды"];
let randonWords = ["fliege", "ratte", "affe"];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 3)];
let randomWord = randonWords[Math.floor(Math.random() * 3)];
let randomInsult = [
  "У тебя",
  randomBodyPart,
  "ещё больше",
  randomAdjective,
  "чем ",
  randomAnimal,
  "y ",
  randomWord + "!!!",
].join(" ");
randomInsult;
let randomInsult =
  "У тебя " +
  randomBodyPart +
  "ещё больше " +
  randomAdjective +
  "чем " +
  randomAnimal +
  "y " +
  randomWord +
  "!!!";

let math = [3, 2, 1];
math.join("больше, чем");

function add(a, b) {
  const result = a + b;
  return result;
}
function multiply(c, d) {
  const multi = c * d;
  return multi;
}

add(9824, 777);
multiply(36325, result);
