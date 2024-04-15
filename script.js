// Initialize an empty array to store words
var wordsArray = [];

// Loop to prompt the user to enter three words
for (var i = 0; i < 3; i++) {
    // Prompt the user and store the entered word in the array
    var word = prompt('Enter word ' + (i + 1) + ':');
    wordsArray.push(word);
}

// Create a new h2 element for the header
var headerElement = document.createElement('h2');
headerElement.textContent = 'CSS Homework';

// Create a new ul element
var ulElement = document.createElement('ul');

// Loop through the array and create li elements
for (var j = 0; j < wordsArray.length; j++) {
    // Create a new li element
    var liElement = document.createElement('li');
    // Set the text content of the li element to the current word
    liElement.textContent = wordsArray[j];
    // Append the li element to the ul element
    ulElement.appendChild(liElement);
}

// Append the ul element to the body of the document
document.body.appendChild(headerElement);
document.body.appendChild(ulElement);

// Create a button for the transformation
var transformButton = document.createElement('button');
transformButton.textContent = 'Swap';
transformButton.style.display = 'block'; // show the button

// Append the button to the body
document.body.appendChild(transformButton);

// Create a new h2 element for the header of the second page
var transformedHeaderElement = document.createElement('h2');
transformedHeaderElement.textContent = 'css homework';
transformedHeaderElement.style.display = 'none'; // hide the header for the second page

// Create a new ul element for the second page
var transformedUlElement = document.createElement('ul');
transformedUlElement.style.display = 'none'; // hide the ul for the second page

// Event listener for the button click
transformButton.addEventListener('click', function () {
    // Transform the wordss
    var transformedArray = wordsArray.map(function (word) {
        return word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
    });

     // Clear the content of the body
     document.body.innerHTML = '';

     // Append the header and ul elements to the document
     document.body.appendChild(transformedHeaderElement);
     document.body.appendChild(transformedUlElement);

         // Apply styles for the second page
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.color = 'blue';

    // Populate the second page with the transformed words
    for (var k = 0; k < transformedArray.length; k++) {
        // Create a new li element
        var transformedLiElement = document.createElement('li');
        // Set the text content of the li element to the transformed word
        transformedLiElement.textContent = transformedArray[k];
         // Apply styles to the li element
         transformedLiElement.style.fontFamily = 'Courier New, monospace';
         transformedLiElement.style.color = 'red';
         transformedLiElement.style.fontWeight = 'bold';
        // Append the li element to the ul element for the second page
        transformedUlElement.appendChild(transformedLiElement);
 
    }
    //create button to refresh page
    var refreshbutton = document.createElement('button');
    refreshbutton.textContent = 'Reload to Word Entry';
    refreshbutton.style.display = 'block';
    document.body.appendChild(refreshbutton); // show the button
     
    // Show the transformed section
    transformedHeaderElement.style.display = 'block';
    transformedUlElement.style.display = 'block';
    //show on click refresh page after removing 2nd section ui elements
    refreshbutton.click(location.reload); 
    refreshbutton.addEventListener('click', function () {
        transformedHeaderElement.style.display = 'none';
        transformedUlElement.style.display = 'none';
        refreshbutton.style.display = 'none';
        //reloads page
        location.reload();  
    });
});