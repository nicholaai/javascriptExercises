$(function() {

  // Setup
  var $list, $newItemForm, $newItemButton;
  var item = '';
  $list = $('ul');
  $newItemForm = $('#newItemForm');
  $newItemButton = $('#newItemButton');

  $('li').hide().each(function(index) {
    $(this).delay(450 * index).fadeIn(1600);
  });

  // Item Counter
  function updateCount() {
    var items = $('li[class!=complete]').length;  // count list items that aren't complete
    $('#counter').text(items);                    // add those items to our item counter
  }
  updateCount();

  // New Items
  $newItemForm.hide();                     // hide the new item form
  $newItemButton.show();                   // show the new item button
  $('#showForm').on('click', function() {  // reveals new item form when new item button clicked
    $newItemButton.hide();
    $newItemForm.show();
  });

  // Add new list item
  $newItemForm.on('submit', function(e) {   // When a new item is submitted
    e.preventDefault();                     // Prevent event default action
    var text = $('input:text').val();       // Save the user input text
    $list.append('<li>' + text + '</li>');  // Add user input text as li to end of list
    $('input:text').val('');                // Clear user input text
    updateCount();                          // Update count
  });

  // Click handling
  $list.on('click', 'li', function() {          // When li element clicked in list
    var $this = $(this);                        // Store item
    var complete = $this.hasClass('complete');  // Check if item has complete class

    if (complete === true) {                    // If item is complete, move and delete
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $this.remove();
      });
    } else {                                    // If not complete, move to bottom and set to complete 
      item = $this.text();
      $this.remove();
      $list
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);
      updateCount();
    }
  });
});
