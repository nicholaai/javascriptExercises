var list = document.getElementsByTagName('ul')[0]; // find position where new element should be added

var newItemFirst = document.createElement('li');   // create new element
var newTextFirst = document.createTextNode('kale') // create new text node
newItemFirst.appendChild(newTextFirst);            // attach new text node to the new element
list.insertBefore(newItemFirst, list.firstChild);  // insert new element to list

var newItemLast = document.createElement('li');     // create new element
var newTextLast = document.createTextNode('cream'); // create new text node
newItemLast.appendChild(newTextLast);               // attached new text node to new element
list.appendChild(newItemLast);                      // add item to end of list


var listItems = document.querySelectorAll('li');    // grab all list items

for (var i = 0; i < listItems.length; i++) {        // loop through li element
    listItems[i].className = 'cool';                // update the class attribute to cool
}

var heading = document.querySelector('h2');                        // grab header node from DOM
var headingText = heading.firstChild.textContent;                  // grab text content of header
var totalItems = listItems.length;                                 // create empty list item counter
var newHeading = headingText + '<span>' + totalItems + '</span>';  // establish new header message
heading.innerHTML = newHeading;                                    // add new message to header
