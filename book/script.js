// *****************CHAPTER 7 JQuery******************/


// 12.Delegating events 
$(function() {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {status: 'important'},
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});

// 11.Event objects
// $(function() {

//   $('li').on('click', function(e) {
//     $('li span').remove();
//     var date = new Date();
//     date.setTime(e.timeStamp);
//     var clicked = date.toDateString();
//     $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
//   });

// });

// 10.Events
// $(function() {
//   var ids = '';
//   var $listItems = $('li');

//   $listItems.on('mouseover click', function() {
//     ids = this.id;
//     $listItems.children('span').remove();
//     $(this).append(' <span class="priority">' + ids + '</span>');
//   });

//   $listItems.on('mouseout', function() {
//     $(this).children('span').remove();
//   });

// });


// <!-- 9.Using each() -->

// $(function() {
//   $('li').each(function() {
//     var ids = this.id;
//     $(this).append(' <span class="order">' + ids + '</span>');
//   });
// });





// 8.Applying CSS Rules

// $(function() {

//   // Get the background color of the first list item.
//   var backgroundColor = $('li').css('background-color');

//   // Write what the background color was after the list.
//   $('ul').prepend('<p>Color was: ' + backgroundColor + '</p>');

  // Set several properties on all list items.
//   $('li').css({
//     'background-color': 'yellow',
//     'border': '1px solid #fff',
//     'color': '#000',
//     'text-shadow': 'none',
//     'font-family': 'Georgia',
//     'padding-left': '+=75'
//   });
// });




// 7.Working with attributes

// $(function() {
//   $('li#three').removeClass('hot');
//   $('li.hot').addClass('favorite');
//   $('ul').attr('id', 'group');
// });



// 6.Adding new content 

// $(function() {
//     $('ul').before('<p class="notice">Just updated</p>');
//     $('li.hot').prepend('+ ');
//     var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
//     $('li:last').after($newListItem);
//   });

// 5.Changing content 

// $(function() {
//     $('li:contains("pine")').text('almonds');
//     $('li.hot').html(function() {
//       return '<em>' + $(this).text() + '</em>';
//     });
//     $('li#one').remove();
//   });

// <!-- 4.Getting AT Content -->
// var $listItemHtml = $("li").text();
// $("li").append("<i>" + $listItemHtml + "</i>");

// var $listItemHtml = $("li").html();
// $("li").append("<i>" + $listItemHtml + "</i>");

// var someVar = $("ul").text();
// $("ul").append("<p>" + someVar + "</p>");

// $(function() {
//     var $listHTML = $('ul').html();
//     $('ul').append($listHTML);
//   });


// 3. Chaining 
// $('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines
// $('li:first-child').addClass('next');
// $('li.priority').addClass('highlight');



// 2. Looping

// $('li em').addClass('seasonal');
// $('li.hot').addClass('favorite');


// 1.Basic JQuery Example


// $(':header').addClass('headline');
// $('li:lt(3)').hide().fadeIn(1500);
// $('li').on('click', function() {
//   $(this).remove();
// });







// **********************CHAPTER 6- EVENTS ***************************************
// 12.Using Mutation events
// var elList, addLink, newEl, newText, counter, listItems; // Declare variables

// elList  = document.getElementById('list');               // Get list
// addLink = document.querySelector('a');                   // Get add item button
// counter = document.getElementById('counter');            // Get item counter

// function addItem(e) {                                    // Declare function
//   e.preventDefault();                                    // Prevent link action
//   newEl = document.createElement('li');                  // New <li> element
//   newText = document.createTextNode('New list item');    // New text node
//   newEl.appendChild(newText);                            // Add text to <li>
//   elList.appendChild(newEl);                             // Add <li> to list
// }

// function updateCount() {                                 // Declare function
//   listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
//   counter.innerHTML = listItems;                         // Update counter
// }

// addLink.addEventListener('click', addItem, false);       // Click on button
// elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated
   
// 11.Form
// var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // Declare variables
// elForm          = document.getElementById('formSignup');          // Store elements
// elSelectPackage = document.getElementById('package');
// elPackageHint   = document.getElementById('packageHint');
// elTerms         = document.getElementById('terms');
// elTermsHint     = document.getElementById('termsHint');

// function packageHint() {                                 // Declare function
//   var pack = this.options[this.selectedIndex].value;     // Get selected option
//   if (pack === 'monthly') {                              // If monthly package
//     elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';//Show this msg
//   } else {                                               // Otherwise
//     elPackageHint.innerHTML = 'Wise choice!';            // Show this message
//   }
// }

// function checkTerms(event) {                             // Declare function
//   if (!elTerms.checked) {                                // If checkbox ticked
//     elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
//     event.preventDefault();                              // Don't submit form
//   }
// }

// //Create event listeners: submit calls checkTerms(), change calls packageHint()
// elForm.addEventListener('submit', checkTerms, false);
// elSelectPackage.addEventListener('change', packageHint, false);

// 10. Which key is pressed 
// This example has been updated to fire on the keyup event instead of keypress 
// (on the last line in the event listener) as new text is not in the textarea until the key is released

// var el;                                                    // Declare variables

// function charCount(e) {                                    // Declare function
//   var textEntered, charDisplay, counter, lastkey;          // Declare variables
//   textEntered = document.getElementById('message').value;  // User's text
//   charDisplay = document.getElementById('charactersLeft'); // Counter element
//   counter = (180 - (textEntered.length));                  // Num of chars left
//   charDisplay.textContent = counter;                       // Show chars left
//   lastkey = document.getElementById('lastKey');            // Get last key elem
//   lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; // Create msg 
// }
// el = document.getElementById('message');                   // Get msg element
// el.addEventListener('keyup', charCount, false);// keyup -call charCount()



// 9. Determening position

// var sx = document.getElementById('sx');        // Element to hold screenX
// var sy = document.getElementById('sy');        // Element to hold screenY
// var px = document.getElementById('px');        // Element to hold pageX
// var py = document.getElementById('py');        // Element to hold pageY
// var cx = document.getElementById('cx');        // Element to hold clientX
// var cy = document.getElementById('cy');        // Element to hold clientY

// function showPosition(event) {                 // Declare function
//   sx.value = event.screenX;                    // Update element with screenX
//   sy.value = event.screenY;                    // Update element with screenY
//   px.value = event.pageX;                      // Update element with pageX
//   py.value = event.pageY;                      // Update element with pageY
//   cx.value = event.clientX;                    // Update element with clientX
//   cy.value = event.clientY;                    // Update element with clientY
// }

// var el = document.getElementById('body');      // Get body Element
// el.addEventListener('mousemove', showPosition, false); // Move updates position



// 8. Click

// Create the HTML for the message
// var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
// msg += '<div><h2>System Maintenance</h2>';
// msg += 'Our servers are being updated between 3 and 4 a.m. ';
// msg += 'During this time, there may be minor disruptions to service.</div>';

// var elNote = document.createElement('div');       // Create a new element
// elNote.setAttribute('id', 'note');                // Add an id of note
// elNote.innerHTML = msg;                           // Add the message
// document.body.appendChild(elNote);                // Add it to the page

// function dismissNote() {                          // Declare function
//   document.body.removeChild(elNote);              // Remove the note
// }

// var elClose = document.getElementById('close');   // Get the close button
// elClose.addEventListener('click', dismissNote, false);// Click close-clear note


// 7. Focus and blur
// function checkUsername() {                        // Declare function
//     var username = el.value;                        // Store username in variable
//     if (username.length < 5) {                      // If username < 5 characters
//       elMsg.className = 'warning';                  // Change class on message
//       elMsg.textContent = 'Not long enough, yet...';// Update message
//     } else {                                        // Otherwise
//       elMsg.textContent = '';                       // Clear the message
//     }
//   }
  
//   function tipUsername() {                          // Declare function
//     elMsg.className = 'tip';                        // Change class for message
//     elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
//   }
  
//   var el = document.getElementById('username');     // Username input
//   var elMsg = document.getElementById('feedback');  // Element to hold message
  
//   // When the username input gains / loses focus call functions above:
//   el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
//   el.addEventListener('blur', checkUsername, false);// blur call checkUsername()
  
  /* LONGER VERSION WITH IE8 (and lower) compatibility
  
  if (el.addEventListener) {
    el.addEventListener('focus', tipUsername, false);
    el.addEventListener('blur', checkUsername, false);
  } else {
    el.attachEvent('onfocus', tipUsername);
    el.attachEvent('onblur', checkUsername);
  }





// 6.Load 

// function setup() {                                  // Declare function
//     var textInput;                                    // Create variable
//     textInput = document.getElementById('username');  // Get username input
//     textInput.focus();                                // Give username focus
//   }
  
//   window.addEventListener('load', setup, false); // When page loaded call setup()
  
  
  /* LONGER VERSION WITH IE8 (and lower) compatibility
  
  if (el.addEventListener) {
        el.addEventListener('click', function(e) {
          itemDone(e);
      }, false);
  } else {
      el.attachEvent('onload', function(e){
        itemDone(e);
      });
  }
  
  */
  
  
  /* LONGER VERSION WITH IE8 (and lower) compatibility
  
  if (el.addEventListener) {
        el.addEventListener('click', function(e) {
          itemDone(e);
      }, false);
  } else {
      el.attachEvent('onload', function(e){
        itemDone(e);
      });
  }
  
  */




// 5. Using event Delegation
// Set up event listeners to call itemDone() on click
// var el = document.getElementById('shoppingList');// Get shopping list
// if (el.addEventListener) {                       // If event listeners work
//   el.addEventListener('click', function(e) {     // Add listener on click
//     itemDone(e);                                 // It calls itemDone()
//   }, false);                                     // Use bubbling phase for flow
// } else {                                         // Otherwise
//   el.attachEvent('onclick', function(e) {        // Use old IE model: onclick
//     itemDone(e);                                 // Call itemDone()
//   });
// }

// function getTarget(e) {                          // Declare function
//     if (!e) {                                      // If there is no event object
//       e = window.event;                            // Use old IE event object
//     }
//     return e.target || e.srcElement;               // Get the target of event
//   }
  
//   function itemDone(e) {                           // Declare function
//     // Remove item from the list
//     var target, elParent, elGrandparent;           // Declare variables
//     target = getTarget(e);                         // Get the item clicked link
//     elParent = target.parentNode;
//     elGrandparent = target.parentNode.parentNode;
//     elGrandparent.removeChild(elParent);
//     if ( target.nodeName.toLowerCase() == "a" ) {  // If user clicked on an a element
//         elListItem = target.parentNode;              // Get its li element
//         elList = elListItem.parentNode;              // Get the ul element    
//         elList.removeChild(elListItem);              // Remove list item from list
//     }

//     if ( target.nodeName.toLowerCase() == "em" ) { // If the user clicked on an em element
//         elListItem = target.parentNode.parentNode;   // Get its li element
//         elList = elListItem.parentNode;              // Get the ul element
//         elList.removeChild(elListItem);              // Remove list item from list
//       }
    
//       // Prevent the link from taking you elsewhere
//       if (e.preventDefault) {                        // If preventDefault() works
//         e.preventDefault();                          // Use preventDefault() 
//       } else {                                       // Otherwise
//         e.returnValue = false;                       // Use old IE version
//       }
//     }
    


// 4. Event Object


// function checkLength(e, minLength) {         // Declare function
//     var el, elMsg;                             // Declare variables
//     if (!e) {                                  // If event object doesn't exist
//       e = window.event;                        // Use IE fallback
//     }
//     el = e.target || e.srcElement;             // Get target of event
//     elMsg = el.nextSibling;                    // Get its next sibling
  
//     if (el.value.length < minLength) {         // If length is too short set msg
//       elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
//     } else {                                   // Otherwise
//       elMsg.innerHTML = '';                    // Clear message
//     }
//   }
  
//   var elUsername = document.getElementById('username');// Get username input
//   if (elUsername.addEventListener) {           // If event listener supported
//     elUsername.addEventListener('blur', function(e) {  // On blur event
//       // NOTE: This function is checkLength() - not checkUsername()
//       checkLength(e, 5);                             // Call checkLength()
//     }, false);                                       // Capture in bubble phase
//   } else {                                           // Otherwise
//     elUsername.attachEvent('onblur', function(e) {   // IE fallback onblur
//       // NOTE: This function is checkLength() - not checkUsername()
//       checkLength(e, 5);                             // Call checkLength()



// 3.EVENT HADLERS WITH PARAMTERS///
// var elUsername = document.getElementById('username');   // Username input
// var elMsg      = document.getElementById('feedback');   // Error msg element

// function checkUsername(minLength) {                     // Declare function
//   if (elUsername.value.length < minLength) {            // If username too short
//     // Set the error message
//     elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
//   } else {                                             // Otherwise
//     elMsg.innerHTML = '';                              // Clear msg
//   }
// }

// elUsername.addEventListener('blur', function() {        // When it loses focus
//   checkUsername(5);                                     // Pass argument here
// }, false);





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

// var itemTwo = document.getElementById('two');  // Get second list item

// var elText  = itemTwo.firstChild.nodeValue;    // Get its text content

// elText = elText.replace('kale', 'bananas');  // Change pine nuts to kale

// itemTwo.firstChild.nodeValue = elText;         // Update the list item
	




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
