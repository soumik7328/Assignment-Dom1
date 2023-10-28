var output = document.getElementById("output");
const equal = document.getElementById("equal");

equal.addEventListener("dblclick", function(){
    var result = parseFloat(document.getElementById("input1").value) * parseFloat(document.getElementById("input2").value);
    output.innerText = result;
});
