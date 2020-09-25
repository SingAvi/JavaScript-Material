var enteredText = document.getElementById('enter-task');
var AddBtn = document.getElementById('add-btn');
var List = document.getElementById('list');


function onClickAdd(){

    var newElement = document.createElement('li')
    if( enteredText.value.length===0)
    {
        alert("Empty Task Cannot Be Added");
    }
    else
    {
        var textNode = document.createTextNode(enteredText.value)
        newElement.appendChild(textNode);
        newElement.id = "li";
        enteredText.value = "";
    
        console.log(enteredText.value);
        List.appendChild(newElement);
        console.log(newElement);
    }
    

}

// Execute a function when the user releases a key on the keyboard
enteredText.addEventListener("keypress", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      AddBtn.click();
    }
  });



AddBtn.addEventListener('click',onClickAdd);