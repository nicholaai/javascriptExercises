// Examples

// Using the DOM
var msg = '<p><b>page title: </b>' + document.title + '<br>';
msg += '<b>page address: </b>' + document.URL + '<br>';
msg += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
el.innerHTML = msg;

// Working with strings
var saying = 'Home sweet home ';
var msg = '<h2>length</h2><p> ' + saying.length + '</p>';
msg+= '<h2>uppercase<h2><p>' + saying.toUpperCase() + '</p>';
msg+= '<h2>lowercase<h2><p>' + saying.toLowerCase() + '</p>';
msg+= '<h2>character index: 12<h2><p>' + saying.charAt(12) + '</p>';
msg+= '<h2>first ee<h2><p>' + saying..indexOf('ee') + '</p>';
msg+= '<h2>last e<h2><p>' + saying.lastIndexOf('e') + '</p>';
msg+= '<h2>character index: 8-14<h2><p>' + saying.substring(8,14) + '</p>';
msg+= '<h2>replace<h2><p>' + saying.('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

// Working with decimal numbers
var originalNumber = 10.23456;
var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>toFixed()</h2><p>' + originalNumber.toFixed(3); + '</p>';
msg += '<h2>toPrecision()</h2<p>' + originalNumber.toPrecision(3) + '</p>'
var el = document.getElementById('info');
el.innerHTML = msg;

// Math object to create random numbers
var randomNum = Math.floor((Math.random() * 10) + 1);
var el = document.getElementById('info');
el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';

// Creating a date object and place in footer
var today = new Date();
var year = today.getFullYear();
var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

// Working with dates and times - determine years of service
var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() = est.getTime(); // Provides result milliseconds
difference = (difference / 31556900000); // Divide my milliseconds in day/week/year

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
