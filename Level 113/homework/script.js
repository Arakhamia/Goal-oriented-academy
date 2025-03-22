// Level 113:
// classList Task
// Add a Class:
// Create an HTML div element with an id of "myDiv".
// Write JavaScript code to add the class "highlight" to the div element.

    
// Remove a Class:
// Continuing from the previous task, write JavaScript code to remove the "highlight" class from the div element.

    
// Toggle a Class:
// Create an HTML button element with an id of "toggleButton" and a div element with an id of "targetDiv". 
// Write JavaScript code that adds an event listener to the button.
// When the button is clicked, toggle the class "active" on the targetDiv.

   
// Check for a Class:
// Create an HTML p element with an id of "checkParagraph" and add the class "important".
// Write JavaScript code to check if the p element has the class "important".
// Log the result (true or false) to the console.

    
// Replace a class:
// Create an html div with an id of "replaceDiv" and add the class "red".
// Write Javascript code to replace the "red" class with the "blue" class.

     
// Item method: 
// Create an html div with an id of "itemDiv" and add the classes "class1 class2 class3".
// Write javascript code to log the second class to the console using the item method.

let myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');

myDiv.classList.remove('highlight');

let toggleButton = document.getElementById('toggleButton');
let targetDiv = document.getElementById('targetDiv');
toggleButton.addEventListener('click', function() {
    targetDiv.classList.toggle('active');
});

let checkParagraph = document.getElementById('checkParagraph');
console.log(checkParagraph.classList.contains('important'));
let replaceDiv = document.getElementById('replaceDiv');
replaceDiv.classList.replace('red', 'blue');