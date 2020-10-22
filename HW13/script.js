(() => {
  function infoBox(wrapper) {
    const btn = wrapper.querySelector(".btn");
    const cardContent = wrapper.querySelector(".control_infobox");
    const card = wrapper.querySelector(".card");
    let isOpened = false;

    function toggleOn() {
      card.style.visibility = "visible";
      isOpened = true;
    }

    function toggleOff() {
      card.style.visibility = "hidden";
      isOpened = false;
    }

    function clickHandler() {
      if (isOpened) {
        toggleOff();
      } else {
        toggleOn();
      }
    }

    btn.addEventListener("click", clickHandler);
  }

  infoBox(document.querySelector("#component1"));
  infoBox(document.querySelector("#component2"));
})();
