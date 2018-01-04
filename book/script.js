// **********************CHAPTER 6- EVENTS ***************************************

// 3.EVENT HADLERS WITH PARAMTERS///
var elUsername = document.getElementById('username');   // Username input
var elMsg      = document.getElementById('feedback');   // Error msg element

function checkUsername(minLength) {                     // Declare function
  if (elUsername.value.length < minLength) {            // If username too short
    // Set the error message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                             // Otherwise
    elMsg.innerHTML = '';                              // Clear msg
  }
}

elUsername.addEventListener('blur', function() {        // When it loses focus
  checkUsername(5);                                     // Pass argument here
}, false);





// 2. EVENT HANDLERS ///

// function checkUsername() {                             // Declare function
//     var elMsg = document.getElementById('feedback');     // Get feedback element
//     if (this.value.length < 5) {                         // If username too short
//       elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
//     } else {                                             // Otherwise
//       elMsg.textContent = '';                            // Clear msg
//     }
//   }
  
//   var elUsername = document.getElementById('username');  // Get username input
//   // When it loses focus call checkUsername()
//   elUsername.addEventListener('blur', checkUsername, false);





// 1.EVENT LISTENERS
// function checkUsername() {                            // Declare function
//     var elMsg = document.getElementById('feedback');    // Get feedback element
//     if (this.value.length < 5) {                        // If username too short
//       elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
//     } else {                                            // Otherwise
//       elMsg.textContent = '';                           // Clear message
//     }
//   }
  
//   var elUsername = document.getElementById('username'); // Get username input
//   elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()

// 16.Example DOM

// ADDING ITEMS TO START AND END OF LIST
// var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

// // ADD NEW ITEM TO END OF LIST
// var newItemLast = document.createElement('li');                    // Create element
// var newTextLast = document.createTextNode('cream');                // Create text node
// newItemLast.appendChild(newTextLast);                              // Add text node to element
// list.appendChild(newItemLast);                                     // Add element end of list

// // ADD NEW ITEM START OF LIST
// var newItemFirst = document.createElement('li');                   // Create element
// var newTextFirst = document.createTextNode('kompot');                // Create text node
// newItemFirst.appendChild(newTextFirst);                            // Add text node to element
// list.insertBefore(newItemFirst, list.firstChild);                  // Add element to list

// var listItems = document.querySelectorAll('li');                   // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// var i;                                                             // Counter variable
// for (i = 0; i < listItems.length; i++) {                           // Loop through elements
//   listItems[i].className = 'hot';                                 // Change class to cool
// }

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// var heading = document.querySelector('h2');                        // h2 element
// var headingText = heading.firstChild.nodeValue;                    // h2 text
// var totalItems = listItems.length;                                 // No. of <li> elements
// var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content
// heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup



// 15.Removing attributes 
// var firstItem = document.getElementById('one'); // Get the first item
// if (firstItem.hasAttribute('class')) {          // If it has a class attribute
//   firstItem.removeAttribute('class');           // Remove its class attribute
// }









// 14. Change attributes


// var firstItem = document.getElementById('one'); // Get the first item
// firstItem.className = 'not';               // Change its class attribute

// var fourthItem = document.getElementsByTagName('li').item(3);// Get fourth item
// // NOTE: The following line should say fourthItem (not el2)
// fourthItem.setAttribute('class', 'hot');       // Add an attribute to it





//13. Check for an attribute and get its values

// var firstItem = document.getElementById('one'); // Get first list item 
// if (firstItem.hasAttribute('class')) {          // If it has class attribute
//   var attr = firstItem.getAttribute('class');   // Get the attribute

//   // Add the value of the attribute after the list
//   var el = document.getElementById('scriptResults');
//   el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';

// }




// 12.Accesing textnodes

var itemTwo = document.getElementById('two');  // Get second list item

var elText  = itemTwo.firstChild.nodeValue;    // Get its text content

elText = elText.replace('kale', 'bananas');  // Change pine nuts to kale

itemTwo.firstChild.nodeValue = elText;         // Update the list item
	




// select the element and store it in an id


// var el = document.getElementById("one");

// el.className = "cool";

// var el = document.getElementsByTagName("li");

// var elements = document.getElementsByClassName("hot")
// the item() method for selecting elements
// if (elements.length >= 1){
//     var firstItem = elements.item(0);
//     var secondItem = elements.item(1);
// }
// the array elements[0] method for selecting 
// var elements = document.getElementsByClassName("hot");
// if (elements.length >= 1){
//     var firstItem = elements[2];
// }

// selecting elements using class attributes


// var elements = document.getElementsByClassName("hot"); 
// if(elements.length > 2){
//     var el = elements[1];
//     el.className = "pink";
// }


// selecting elements by tag name 


// var elements = document.getElementsByTagName("li");

// if(elements.length > 0){
//     var el = elements[0];
//     el.className = "blue";
// }
// selecting items using the CSS Selectors
// var el = document.querySelector("li.hot");
// el.className = "cool";

// QuerySelectorAll() returns NodeList
// var els = document.querySelectorAll("li.hot");
// els[1].className = "cool";


// // Repeating actions for an entrire nodelist 


// var  hotItems = document.querySelectorAll("li.hot");
// for (var i = 0; i < hotItems.length; i++) {
//     hotItems[i].className = "cool";
    
// }
// var hotItems = document.querySelectorAll("li.hot");
// if (hotItems.length > 0) {
//     for (var i = 0; i< hotItems.length; i++) {
//         hotItems[i].className = "cool";
        
//     }

// }


// Previous and next sibling 

// var startItem = document.getElementById("two");
// var prevItem = startItem.previousElementSibling;
// var nextItem = startItem.nextElementSibling;

// prevItem.className = "complete";
// nextItem.className = "cool";

// First and last child 
// selects the starting point and find its children
// var startItem = document.getElementsByTagName("ul")[0];
// var firstItem = startItem.firstChild;
// var lastItem = startItem.lastChild;

// changes the values of the chuldren's class attributes
// firstItem.setAttribute("class", "complete");
// lastItem.setAttribute("class", "cool");

// document.getElementById("one").firstChild.nextSibling.nodeValue;

// ACCESSING AND CHANGING A TEXT NODE

//  var itemTwo = document.getElementById("two");
//  var elText = itemTwo.firstChild.nodeValue;
//  elText = elText.replace("pine nuts", "kale");
//  itemTwo.firstChild.nodeValue = elText;


// ACCESSING TEXT ONLY 
// var firstItem = document.getElementById("one");
// var showTextContent = firstItem.textContent;
// var showInnerText = firstItem.innerText;


// var msg = "<p>textContent: " + showTextContent + "</p>";
// msg += "<p>innerText: " + showInnerText + "</p>";
// var el = document.getElementById("scriptResults");

// firstItem.textContent = "sourdough bread";
