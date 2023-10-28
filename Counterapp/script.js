const decrementby = document.getElementById("decrementby");
const incrementby = document.getElementById("incrementby");
const reset = document.getElementById("reset");
const displayvalue = document.getElementById("displayvalue");

decrementby.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value > 0) {
      displayvalue.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });
  
  // for increment button click
  incrementby.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayvalue.innerText = value + 1;
    }
  });
  
  // for reset button click
  reset.addEventListener("click", () => {
    displayvalue.innerText = 0;
  });
