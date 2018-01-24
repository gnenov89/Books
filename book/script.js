



// <!-- CHAPTER 9 API'S -->

// <!-- 1.Working with storage -->

// This example has been updated to use Modernizr - please note the use of localstorage in lowercase
if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Elements populated
  txtAnswer.value = localStorage.getItem('answer');      // by localStorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Data saved on keyup
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}


// <!-- Chapter 8 AJAX/JSON -->


// 6.Handling Forms 

// $('#register').on('submit', function(e) {           // When form is submitted
//   e.preventDefault();                               // Prevent it being sent
//   var details = $('#register').serialize();         // Serialize form data
//   $.post('register.php', details, function(data) {  // Use $.post() to send it
//     $('#register').html(data);                    // Where to display result
//   });
// });

// 5.Requesting data
// NOTE: This example will only work if you run it on a web server (it will not work locally)

// This first variable creates the t-shirt options, the HTML for it is shown on p393
// var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="img/t-gray.png" id="gray" alt="gray" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="img/t-yellow.png" id="yellow" alt="yellow" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="img/t-green.png" id="green" alt="green" /></a></div></div>';
// $('#selector').append(vote);

// // This adds ratings to the side bar
// $('#selector a').on('click', function(e) {
//   e.preventDefault();
//   var queryString = 'vote=' + $(e.target).attr('id');
//   $.get('votes.php', queryString, function(data) {
//     $('#selector').html(data);
//   });
// });

// 4.USing Jsonp

// function showEvents(data) {                           // Callback when JSON loads
//   var newContent = '';                                // Variable to hold HTML
 
//     // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
//     for (var i = 0; i < data.events.length; i++) {    // Loop through object
//       newContent += '<div class="event">';
//       newContent += '<img src="' + data.events[i].map + '" ';
//       newContent += 'alt="' + data.events[i].location + '" />';
//       newContent += '<p><b>' + data.events[i].location + '</b><br>';
//       newContent += data.events[i].date + '</p>';
//       newContent += '</div>';
//     }

//     // Update the page with the new content
//     document.getElementById('content').innerHTML = newContent;
// }


// 3. Loading JSON with AJAX

// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

// var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

// xhr.onload = function() {                       // When readystate changes
//   // The following conditional check will not work locally - only on a server
//   // if(xhr.status === 200) {                      // If server status was ok
//     responseObject = JSON.parse(xhr.responseText);

//     // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
//     var newContent = '';
//     for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
//       newContent += '<div class="event">';
//       newContent += '<img src="' + responseObject.events[i].map + '" ';
//       newContent += 'alt="' + responseObject.events[i].location + '" />';
//       newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
//       newContent += responseObject.events[i].date + '</p>';
//       newContent += '</div>';
//     }

//     // Update the page with the new content
//     document.getElementById('content').innerHTML = newContent;

//   // }
// };

// xhr.open('GET', 'data.json', true);        // Prepare the request
// xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).



// 2.Loading XML with AJAX 

// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

// var xhr = new XMLHttpRequest();        // Create XMLHttpRequest object

// xhr.onload = function() {              // When response has loaded
//  // The following conditional check will not work locally - only on a server
//  // if (xhr.status === 200) {             // If server status was ok

//   // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
//   var response = xhr.responseXML;                      // Get XML from the server
//   var events = response.getElementsByTagName('event'); // Find <event> elements

//   for (var i = 0; i < events.length; i++) {            // Loop through them
//     var container, image, location, city, newline;      // Declare variables
//     container = document.createElement('div');          // Create <div> container
//     container.className = 'event';                      // Add class attribute

//     image = document.createElement('img');              // Add map image
//     image.setAttribute('src', getNodeValue(events[i], 'map'));
//     image.setAttribute('alt', getNodeValue(events[i], 'location'));
//     container.appendChild(image);

//     location = document.createElement('p');             // Add location data
//     city = document.createElement('b');
//     newline = document.createElement('br');
//     city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
//     location.appendChild(newline);
//     location.insertBefore(city, newline);
//     location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
//     container.appendChild(location);

//     document.getElementById('content').appendChild(container);
//   }
// }

//   function getNodeValue(obj, tag) {                   // Gets content from XML
//     return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
//   }

// //  THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE

// xhr.open('GET', 'data/data.xml', true);             // Prepare the request
// xhr.send(null);                                     // Send the request





// 1.Loading HTML with AJAX

// var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

// xhr.onload = function() {                       // When response has loaded
//   // The following conditional check will not work locally - only on a server
//   if(xhr.status === 200) {                       // If server status was ok
//     document.getElementById('content').innerHTML = xhr.responseText; // Update
//   }
// };

// xhr.open('GET', 'data/data.html', true);        // Prepare the request
// xhr.send(null);                                 // Send the request

// NOTE: If you run this file locally
// You will not get a server status
// You can set the conditional statement to true on line 5 as shown below
// if(true) {







// *****************CHAPTER 7 JQuery******************/


// 21.Determening positions on the page
// $(function() {
//   var $window = $(window);
//   var $slideAd = $('#slideAd');
//   var endZone = $('#footer').offset().top - $window.height() - 500;

//   $window.on('scroll', function() {

//     if (endZone < $window.scrollTop()) {
//       $slideAd.animate({ 'right': '0px' }, 250);
//     } else {
//       $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
//     }

//   });

// });


// 20.Changing dimensions

// $(function() {
//   var listHeight = $('#page').height();

//   $('ul').append('<p>Height: ' + listHeight + 'px</p>');
//   $('li').width("100px").height("50px");
//   $('li#one').width(125);
//   $('li#two').width(200);
// });


// 19.Copy, Paste and Delete

// $(function() {
//   var $p = $('p');

//   // Create a clone of the <p> element and add it after the <h2> element.
//   var $clonedQuote = $p.clone();
//   $p.remove();
//   $clonedQuote.insertAfter('h2');

//   // Remove first item, and add it to the end of the list.
//   // Note how this happens in both lists.
//   var $moveItem = $('#one').detach();

//   $moveItem.prependTo('ul');
// });





// 18.Working with Forms

// $(function() {

//   var $newItemButton = $('#newItemButton');
//   var $newItemForm = $('#newItemForm');
//   var $textInput = $('input:text');

//   $newItemButton.show();
//   $newItemForm.hide();

//   $('#showForm').on('click', function(){
//     $newItemButton.hide();
//     $newItemForm.show();
//   });

//   $newItemForm.on('submit', function(e){
//     e.preventDefault();
//     var newText = $textInput.val();
//     $('li:last').before('<li>' + newText + '</li>');
//     $newItemForm.hide();
//     $newItemButton.show();
//     $textInput.val('');
//   });

// });



// 17.Using Indexes

// $(function() {
//   $('li:lt(2)').removeClass('hot');
//   $('li').eq(0).addClass('complete');
//   $('li:gt(2)').addClass('cool');
// });

// 16.Filters in use
// $(function() {
//   var $listItems = $('li');

//   $listItems.filter('.hot:last').removeClass('hot');
//   $('li:not(.hot)').addClass('cool');
//   $listItems.has('em').addClass('complete');

//   $listItems.each(function() {
//     var $this = $(this);
//     if ($this.is('.hot')) {
//       $this.prepend('Priority item: ');
//     }
//   });

//   $('li:contains("honey")').append(' (local)');
// });


// 15.Traversing 
// $(function() {
//   var $h2 = $('h2');
//   $('ul').hide();
//   $h2.append('<a class="show">show</a>');

//   $h2.on('click', function() {
//     $h2.next('ul')
//       .fadeIn(500)
//       .children('.hot')
//       .addClass('complete');
//     $h2.find('a').fadeOut();
//   });

// });

// 14.Animations 
// $(function() {
//   $('li').on('click', function() {
//     $(this).animate({
//       opacity: 0.0,
//       paddingLeft: '+=80'
//     }, 1000, function() {
//       $(this).remove();
//     });
//   });
// });




// 13.Effects

// $(function() {

//   $('h2').hide().slideDown();
//   var $li = $('li');
//   $li.hide().each(function(index) {
//     $(this).delay(700 * index).fadeIn(700);
//   });

//   $li.on('click', function() {
//     $(this).fadeOut(700);
//   });

// });

// 12.Delegating events 
// $(function() {
//   var listItem, itemStatus, eventType;

//   $('ul').on(
//     'click mouseover mouseleave',
//     ':not(#four)',
//     {status: 'important'},
//     function(e) {
//       listItem = 'Item: ' + e.target.textContent + '<br />';
//       itemStatus = 'Status: ' + e.data.status + '<br />';
//       eventType = 'Event: ' + e.type;
//       $('#notes').html(listItem + itemStatus + eventType);
//     }
//   );

// });

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
