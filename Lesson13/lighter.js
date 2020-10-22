(() => {
  const redElement = document.querySelector(".lighter_light_red");
  const yellowElement = document.querySelector(".lighter_light_yellow");
  const greenElement = document.querySelector(".lighter_light_green");
  const ACTIVE_CLASS_NAME = "lighter_light_active";

  function toggleOff() {
    redElement.classList.remove(".lighter_light_active");
    yellowElement.classList.remove(".lighter_light_active");
    greenElement.classList.remove(".lighter_light_active");
  }

  redElement.addEventListener("click", function () {
    toggleOff();
    redElement.classList.add(".lighter_light_active");
  });
  yellowElement.addEventListener("click", function () {
    toggleOff();
    yellowElement.classList.add(".lighter_light_active");
  });

  greenElement.addEventListener("click", function () {
    toggleOff();
    greenElement.classList.add(".lighter_light_active");
  });
})();
