// Using DOM Event Handlers
function checkUserName() {                                        // Decare function
  var elMsg = document.getElementById('feedback');                // Get feedback element
  if (this.value.length < 5) {                                    // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set message
  } else {
    elMsg.textContent = '';                                       // Clear message
  }
}

var elUsername = document.getElementById('username'); // Clear username input
elUsername.onblur = checkUserName;                    // When it loses focus call checkUserName()


// Using Event Listeners
function checkUserName() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {  // If the username is too short
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';     // Clear message
  }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUserName, false); // Add event listener to username


// Using parameters with event Listeners
var elUsername = document.getElementById('username'); // Get username input
var elMsg = document.getElementById('feedback');      // Get feedback element

function checkUserName (minLength) {
  if (elUsername.value.length < minLength) { // If provided username is less than minimum length
    elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMsg.innerHTML = '';            // If username is correct length clear the feedback message
  }
}

elUsername.addEventListener('blur', function () { // Add blur event listener to username id
  checkUserName(5);                               // Pass required argument to checkUserName
}, false);


// Fallback for using event listeners in IE8
var elUsername = document.getElementById('username');  // Get username input
var elMessage = document.getElementById('feedback');   // Get feedback element

function checkUserName(minLength) {
  if (elUsername.value.length < minLength) {
    elMessage.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {
    elMessage.innerHTML = '';
  }
}

if (elUsername.addEventListener) {                // If event listener supported
  elUsername.addEventListener('blur', function(){
    checkUserName(5);
  }, false);
} else {
  elUsername.attachEvent('onblur', function(){   // IE fallback: onblur
    checkUserName(5);
  });
}


// Using event listeners with the event object
function checkLength (e, minLength) {
  var el, elMsg;
  if (!e) {                       // If event object does not exist
    e = window.event;             // Use IE fallback
  }
  el = e.target || e.srcElement;  // Get target of event
  elMsg = el.nextSibling;

  if (el.value.length < minLength) {                                             // If the length is too short
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';   // Create message
  } else {
    elMsg.innerHTML = '';                                                        // Clear the message
  }
}

var elUsername = document.getElementById('username'); // Grab the username element
if (elUsername.addEventListener) {                    // If browser supports addEventListener
  elUsername.addEventListener('blur', function () {
    checkLength(e, 5);
  }, false);
} else {                                              // Otherwise use IE fallback
  elUsername.attachEvent('onblur', function() {
    checkLength(e, 5);
  });
}


// Event delegation
function getTarget(e) {
  if(!e) {                              // If there is no event object
    e = window.target;                  // User the old IE event object
  }
  return e.target || window.srcElement; // Get the target of event
}

function itemDone(e) {
  // Remove item from the list
  var target, elParent, elGrandParent;
  target = getTarget(e);                        // Get the item clicked link
  elParent = target.parentNode;                 // Get the list item
  elGrandParent = target.parentNode.parentNode; // Get its list
  elGrandParent.removeChild(elParent);          // Remove list item from list

  // Prevent the link from redirecting you
  if (e.preventDefault) {  // If preventDefault() works
    e.preventDefault();
  } else {
    e.returnValue = false; // Use IE fallback
  }
}

var el = document.getElementById('shoppingList'); // Get shopping list
 // Setup event listeners to call itemDone() on click
if (el.addEventListener) {                        // If browser supports event listeners
  el.addEventListener('click', function(e) {
    itemDone(e);
  }, false);                                      // Use bubbling phase flow
} else {                                          // Use IE fallback
  el.attachEvent('onclick', function(e) {
    itemDone(e)
  });
}

// Focus on username field after page load
function setup() {
  var textInput;
  textInput = document.getElementById('username'); // Get username input
  textInput.focus();                               // Give username focus
}

window.addEventListener('load', setup, false);     // When page loaded call setup()

// Focus & Blur
var el = document.getElementById('username');    // Username input
var elMsg = document.getElementById('feedback'); // Message

function checkUserName(){
  var username = el.value;                          // Store username
  if (username.length < 5) {
    elMsg.className = 'warning';
    elMsg.textContent = 'Not long enough, yet...';  // Set message
  } else {
    elMsg.textContent = '';                         // Clear message
  }
}

function tipUserName() {
  elMsg.className = 'tip';
  elMsg.textContent = 'Username must be at least 5 characters';
}

if (el.addEventListener) {
  document.addEventListener('focus', tipUserName, false);  // When focus happens call tipUserName
  document.addEventListener('blur', checkUserName, false); // When blur happens call checkUserName
} else {                                                   // Set using IE fallback
  document.attachEvent('onfocus', tipUserName);
  document.attachEvent('onblur', checkUserName);
}

// Click event to close overlay alert
// Create HTML for the overlay message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');          // Add an id of note
elNote.innerHTML = msg;                     // Attach msg to new div element
document.body.appendChild('elNote');        // Add elNote to the page

function dismissNote() {
  document.body.removeChild('elNote');      // Remove the note
}

var elClose = document.getElementById('close');        // Grabh the close button
elClose.addEventListener('click', dismissNote, false); // Add listener to call dismissNote


// Determining cursor position
var sx = document.getElementById('sx'); // Hold screenX
var sy = document.getElementById('sy'); // Hold screenY
var px = document.getElementById('px'); // Hold pageX
var py = document.getElementById('py'); // Hold pageY
var cx = document.getElementById('cx'); // Hold clientX
var cy = document.getElementById('cy'); // Hold clientY

function showPosition(event) {
  sx.value = event.screenX;
  sy.value = event.screenY;
  px.value = event.pageX;
  py.value = event.pageY;
  cx.value = event.clientX;
  cy.value = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);


// Which key was pressed
var el;

function charCount(e) {
  var textEntered, charDisplay, counter, lastKey;
  textEntered = document.getElementById('message').value;        // User text
  charDisplay = document.getElementById('charactersLeft');       // Counter element
  counter = (180 - (textEntered.length));                        // 180 max char
  charDisplay.textContent = counter;

  lastKey = document.getElementById('lastKey');                  // Get last key used
  lastKey.textContent = 'Last key in ASCII code: ' + e.keyCode;  // Message + keyCode
}
el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);               // Add listener to message element


// Using form events
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm          = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {
  var pack = this.options[this.selectedIndex].value; // Get selected option
  if (pack == 'monthly') {
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
  } else {
    elPackageHint.innerHTML = 'Wise choice!';
  }
}

function checkTerms(event) {
  if (!elTerms.checked) {
    elTermsHint.innerHTML = 'You must agree to the terms.';
    event.preventDefault();  // Dont submit form
  }
}

elForm.addEventListener('submit', checkTerms, false);
elForm.addEventListener('change', packageHint, false);


// Mutation events
var elList, addLink, newEl, newText, counter, listItems;
elList   = document.getElementById('list');     // get list
addLink  = document.querySelector('a');         // get add item button
counter  = document.getElementById('counter');  // get item counter

function addItem(e) {
  e.preventDefault();                                 // prevent link action
  newEl = document.createElement('li');
  newText = document.createTextNode('New list item');
  newEl.appendChild(newText);
  elList.appendChild(newEl);
}

funciton updateCount() {
  listItems = document.getElementById('li');
  counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false); // When new node inserted to DOM, call updateCount


// HTML5 Events
function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);
window.addEventListener('beforeunload', funciton(event){
  return 'You have changes that nave not been saved...';
}, false);
