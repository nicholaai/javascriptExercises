// Data HTML
var xhr = new XMLHttpRequest();                                       // Create XMLHttpRequest object

xhr.onload = function() {                                             // When response has loaded
  if (xhr.status === 200) {                                           // If ther server status was ok
    document.getElementById('content').innerHTML = xhr.responseText;  // Update content with the responseText
  }
};

xhr.open('GET', 'data.data.html', true);  // Prepare the request
xhr.send(null);                           // Send the request

// Leading JSON with AJAX
var xhr = new XMLHttpRequest();                              // Create XMLHttpRequest
xhr.onload = function() {
  if (xhr.status === 200) {                                  // Set to true for local testing
    responseObject = JSON.parse(xhr.responseText);

    // Build up string with new content
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }
    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;
  }
};
xhr.open('GET', 'data/data.json', true);
xhr.send(null);

// Using JSONP
function showEvents(data) {
  var newContent = '';
  for (var i = 0; i < data.events.length; i++) {
    newContent += '<div class="event">';
    newContent += '<img src="' + data.events[i].map + '"';
    newContent += ' alt="' + data.events[i].location + '" />';
    newContent += '<p><b>' + data.events[i].location + '</b><br>';
    newContent += '</div>';
  }
  document.getElementById('content').innerHTML = newContent;  // Update page
}

// Loading Content
$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #content').hide().fadeIn('slow'); // New content
});

// Requesting Data
$('#selector a').on('click', function(e) {
  e.preventDefault();
  var queryString = 'vote=' + event.target.id;
  $.get('votes.php', queryString, function(data) {
    $('#selector').html(data);
  });
});

// Submitting forms
$('#register').on('submit', function(e) {           // When a form is submitted on register ID
  e.preventDefault();
  var details = $('#register').serialize();         // Store and serialize form data
  $.post('register.php', details, function(data) {  // Send post using register.php & details
    $('#register').html(data);                      // Assign returned data as html content for register
  });
});

JSON & Errors
$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // SERVER RETURNS DATA
    var d = new Date();                                  // Create date object
    var hrs = d.getHours();                              // Get hours
    var mins = d.getMinutes();                           // Get mins
    var msg = '<h2>Exchange Rates</h2>';                 // Start message
    $.each(data, function(key, val) {                    // Add each rate
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>Last update: ' + hrs + ':' + mins + '<br>'; // Show update time
    $('#rates').html(msg);                               // Add rates to page
  }).fail( function() {                                  // THERE IS AN ERROR
    $('aside').append('Sorry, we cannot load rates.');   // Show error message
  }).always( function() {                                // ALWAYS RUNS
     var reload = '<a id="refresh" href="#">';           // Add refresh link
     reload += '<img src="img/refresh.png" alt="refresh" /></a>';
     $('#reload').html(reload);                          // Add refresh link
     $('#refresh').on('click', function(e) {             // Add click handler
       e.preventDefault();                               // Stop link
       loadRates();                                      // Call loadRates()
     });
  });
}
loadRates();

// Controlling AJAX
$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // URL to load
  var $content = $('#content');                             // Cache selection

  $('nav a.current').removeClass('current');                // Update links
  $(this).addClass('current');
  $('#container').remove();                                 // Remove content

  $.ajax({
    type: "POST",
    url: url,                                               // Path to file
    timeout: 2000,                                          // Waiting time
    beforeSend: function() {                                // Before Ajax
      $content.append('<div id="load">Loading</div>');      // Load message
    },
    complete: function() {                                  // Once finished
      $('#loading').remove();                               // Clear message
    },
    success: function(data) {                               // Show content
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() {                                      // Show error msg
      $('#panel').html('<div class="loading">Please try again soon.</div>');
    }
  });
});
