//var input1 = document.getElementById("input1");
//var input2 = document.getElementById("input2");
var output = document.getElementById("output");
const equal = document.getElementById("equal");

equal.addEventListener("click", function(){
    var result = parseFloat(document.getElementById("input1").value) + parseFloat(document.getElementById("input2").value);
    output.innerText = result;
});
