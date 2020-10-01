function greet() {
  const name = prompt("Enter Name");
  let greetPhase;
  if (name === "admin") {
    greetPhase = "Hello admin  !!!";
  } else {
    greetPhase = "Hello " + name + " !!!";
  }
  document.write(greetPhase);
}

function welcome() {
  alert("Welcome");
}
