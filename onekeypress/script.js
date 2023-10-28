var input = document.getElementById("search");

// Add an event listener for the keypress event
input.addEventListener("keypress", function() {
  
  // Remove the focus from the input element
  input.blur();
  
  // Set a timeout of half a second
  setTimeout(function() {
    
    // Focus the input element again
    input.focus();
    
    // Clear the input value
    input.value = "";
    
    // Display an alert with the pressed key
    alert("You pressed a key!");
    
    // End of timeout function
    },500);
  
// End of event listener function
});