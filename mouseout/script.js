const boxElement = document.getElementById("box");

// add a mouseout event listener to the element
boxElement.addEventListener("mouseout", function () {
  boxElement.innerText= ("“Don’t wish me good night, I’m an engineer…my night is my working hour \uD83D\uDD25”");
});