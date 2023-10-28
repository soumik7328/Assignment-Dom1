var form = document.getElementById("form");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

input1.addEventListener("keydown", function(event){
    form.style.backgroundColor = event.target.value;
});

input2.addEventListener("keyup", function(event){
    form.style.backgroundColor = event.target.value;
});
