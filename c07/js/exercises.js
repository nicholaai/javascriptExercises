// Basic JQuery Example
$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function() {
  $(this).remove();
});


// Looping
$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');


// Chaining
$('li[id!="one"]').hide().delay(500).fadeIn(1400);


// Get HTML fragment
var $listHTML = $('ul').html();
$('ul').append($listHTML);

// Get text fragment
var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</p>');

// Get HTML Node
var $listItemHTML = $('li').html();
$('li').append('<i>' + $listItemHTML + '</i>');

// Get text Node
var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText + '</i>');

// Changing Content
$(function() {
  $('li:contains("pine")').text('almonds');
  $('li.hot').html(function() {
    return '<b>' + $(this).text() + '</b>';
  });
  $('li#one').remove();
});

// Adding New Content
$(function() {
  $('ul').before('<p class="notice">Just updated</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>gluten-free</em> soy sause</li>');
  $('li:last').after($newListItem);
});

// Changing CSS Rues
$(function() {
  var backgroundColor = $('li').css('background-color');       // Get background color of 1st list item
  $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'text-shadow': 'none',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});

// Using .each()
$(function() {
  $('li').each(function() {
    var ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  });
});

// Events
$(function() {
  var ids = '';
  var $listItems = $('li');

  $listItems.on('mouseover click', function() {
    ids = this.id;
    $listItems.children('span').remove();
    $(this).append(' <span class="priority">' + ids + '</span>');
  });

  $listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });
});

// Event Object
$(function() {
  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });
});

// Delegating Events
$(function() {
  var listItems, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#id)',
    {status: 'important'},
    function(e) {
      listItems = 'Item: ' + e.target.textContent + '<br>';
      itemStatus = 'Status: ' + e.data.status + '<br>';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItems + itemStatus + eventType);
    }
  );
});

// Effects
$(function(){
  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });
  $li.on('click', function() {
    $(this).fadeOut(700);
  });
});

// Animate
$(function() {
  $('li').on('click', function() {
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500, function() {
      $(this).remove();
    });
  });
});

// Traversing the DOM
$(function() {
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append('<a class="show">show</a>');

  $h2.on('click', function() {
    $h2.next()
      .fadeIn(500)
      .children('.hot')
      .addClass('complete');
    $h2.find('a').fadeOut();
  });
});

// Filters
var $listItems = $('li');
$listItems.filter('.hot:last').removeClass('hot'); // Find last li with class of hot and remove class
$('li:not(.hot)').addClass('cool');                // Find li without class as hot and set to cool
$listItems.has('em').addClass('complete');         // Find li that has em element in it

$listItems.each(function() {
  var $this = $(this);
  if ($this.is('.hot')) {
    $this.prepend('Priority item: ');
  }
});

$('li:contains("honey")').append(' (local)');

// Using index number
$(function() {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});

// Work with forms
$(function() {
  var $newItemButton = $('#newItemButton');
  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');

  $newItemButton.show();                    // On load show new item button
  $newItemForm.hide();                      // On load hide the new item form

  $('#showForm').on('click', function() {   // Show new item form when new item button clicked
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var newText = $('input:text').val();             // Select input with value of text and get value user entered
    $('li:last').after('<li>' + newText + '</li>');  // Add new item to the list
    $newItemForm.hide();
    $newItemButton.show();
    $('input:text').val('');                         // Clear the old text
  });
});

// Cut copy paste
$(function() {
  var $p = $('p');
  var $clonedQuote = $p.clone();
  $p.remove();
  $clonedQuote.insertAfter('h2');

  var $moveItem = $('#one').detach();
  $moveItem.appendTo('ul');
});


// Changing dimensions
$(function() {
  var listHeight = $('#page').height();

  $('ul').append('<p>Height: ' + listHeight + 'px</p>');
  $('li').width('50%');
  $('li#one').width(125);
  $('li#two').width('75%');
});

// Position
$(function() {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500; // Footer distance from top - window height - 500

  $window.on('scroll', function() {
    if ( (endZone) < $window.scrollTop() ) {                        //
      $slideAd.animate({'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px'}, 250);
    }
  });
});
