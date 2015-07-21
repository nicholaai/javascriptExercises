$(function() {
  function loadContent(url) {
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var href = this.href;                       // Grab href attr
    var $(this) = $(this);                      // Store link as jQuery object
    $('nav a.current').removeClass('current');  // Update current tag
    $this.addClass('current');
    loadContent(href);                          // Load content
    history.pushState('', $this.text, href);    // Update history
  });

  window.onpopstate = function() {                                     // When back or forward clicked
    var path = location.pathname;                                      // Get file path
    loadContent(path);
    var page = path.substring(location.pathname.lastIndexof("/") + 1); // Grab file name so current link can be updated
    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');                    // Update current link
  };
});
