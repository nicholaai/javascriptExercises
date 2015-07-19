$(function() {                                    // When the DOM is ready
  var times;
  $.ajax({
    beforeSend: function(xhr) {                   // Before requesting data
      if (xhr.overrideMimeType) {                 // If supported
        xhr.overrideMimeType("application/json"); // set MIME to prevent errors
      }
    }
  });

  // Function that collects data from the JSON
  function loadTimetable() {
    $.getJSON('data/example.json')              // Try to collect JSON data
    .done( function(data){                      // If successful
      times = data;                             // Store it in a variable
    }).fail( function() {                       // If a problem: show message
      $('#event').html('Sorry! We could not load the timetable at the moment');
    });
  }
  loadTimetable();

  // Click on event to load timetable
  $('#content').on('click', '#event a', function(e) {
    e.preventDefault();
    var loc = this.id.toUpperCase();                    // IDs are stored in all caps

    var newContent = '';                                // Use for timetable
    for (var i = 0; i < times[loc].length; i++) {       // loop through events
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }
    $('#sessions').html('<ul>' + newContent + '</ul>'); // Display times

    $('#event a.current').removeClass('current');       // Change selected anchor
    $(this).addClass('current');

    $('#details').text('');                             // Clear third column
  });

  // Click on a session to load the description
  $('#content').on('click', '#sessions li a', function(e) {
    e.preventDefault();
    var fragment = this.href;                                 // Grab link to session

    fragment = fragment.replace('#', ' #');                   // Add space before # for load method formating
    $('#details').load(fragment);                             // Load only desired id 

    $('#sessions a.current').removeClass('current');          // Set new current class
    $(this).addClass('current');
  });

  // Primary nav behavior
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // Slowly load new content
  });
});
