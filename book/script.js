
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
