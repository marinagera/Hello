(() => {
  const circleEl = document.querySelectorAll(".circle__inner");
  const poppupEl = document.querySelectorAll(".poppup");

  //   const ACTIVE_CLASS_NAME = "poppup";

  //   function toggleOff() {
  //     for (const element of poppupEl) {
  //       console.log(element);
  //       element.style.visibility = "hidden";
  //     }
  //   }

  function toggleOn() {
    // this.style.visibility = "visible";
    // toggleOff();
    for (const element of poppupEl) {
      console.log(element);
      console.log(poppupEl);
      element.style.visibility = "visible";
    }
    // console.log(element);
    // const poppupEl = document.querySelectorAll(".poppup");
    // for (const element of poppupEl) {
    //   this.classList.add("active");
    // }
    // for (const element of poppupEl) {
    //   console.log(this(element));
    //   poppupEl.style.visibility = "visible";
    // }
  }

  for (const element of circleEl) {
    console.log(element);
    element.addEventListener("click", toggleOn);
  }
})();
