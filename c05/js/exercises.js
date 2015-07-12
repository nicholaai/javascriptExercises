// Selecting elements using id attributes
var el = document.getElementById('one');
el.className = 'cool';

var elements = document.getElementsByClassName('hot');
if (elements.length >= 1) {
  var firstItem = elements.item(0);
}

// Selecting elements using class attributes
var elements = document.getelementsbyClassName('hot');
if (elements.length > 2) {
  var el = elements[2];
  el.className = 'cool';
}

// Selecting elements by tag name
var elements = document.getElementsByTagName('li');
if (elements.length > 0) {
  var el = elements[0];
  el.className = 'cool';
}

// Selecting elements using css selectors
var el = document.querySelector('li.hot'); // Single element
el.className = 'cool';

var els = document.querySelectorAll('li.hot'); // All elements
els[1].className = 'cool';

// Repeating actions for an entire nodelist
var hotItems = document.querySelectorAll('li.hot');
for (var i = 0; i < hotItems.length; i++) {
  hotItems[i].className = 'cool';
}

// Previous & next sibling
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';

// First & Last child
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.setAttribute('class', 'complete');
lastItem.setAttribute('class', 'cool');

// Accessing & Changing a text node
var itemTwo = document.getElementById('two'); // Get second list item
var elText = itemTwo.firstChild.nodeValue;    // Get its text content
elText = elText.replace('pine nuts', 'kale'); // Change pine nuts to kale
itemTwo.firstChild.nodeValue = elText;        // Update the list item

// Update text & Markup
var firstItem = document.getElementById('one');                                  // Store first list item in var
var itemContent = firstItem.innerHTML;                                          // Get content of first list item
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>'; // Update content

// Adding an element to the Dom Tree
var newEl = document.createElement('li');              // Create new element
var newText = document.createTextNode('quiona');       // Create new text node
newEl.appendChild(newText);                            // Attached new text node to new element
var position = document.getElementsByTagName('ul')[0]; // Find position where new element should be added
position.appendChild(newEl);                           // Insert new element into its position

// Removing an element from the DOM tree
var removeEl = document.getElementsByTagName('li')[3]; // Select the element to remove
var containerEl = removeEl.parentNode;                 // Select its containing element
containerEl.removeChild(removeEl);                     // Remove the element

// Check for an attribute and get its values
var firstItem = document.getElementById('one');     // Get the first list item
if (firstItem.hasAttribute('class')) {              // If it has class attribute
  var attr = firstItem.getAttribute('class');       // Get the attribute
  var el = document.getElementById('scripResults'); // Add the value of the attribute after the list
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}

// Creating attributes & changing their values
var firstItem = document.getElementbyId('one');  // Get the first item
firstItem.className = 'complete';                // Change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3); // Get the fourth item
fourthItem.setAttribute('class', 'cool');                     // Add an attribute to it

// Removing attributes
var firstItem = document.getElementById('one');  // Get the first item
if (firstItem.hasAttribute('class')) {           // If it has a class attribute
  firstItem.removeAttribute('class');            // Remove its class attribute
}
