if (window.sessionstorage) {                                // If browswer supports session session storage
  var txtUsername = document.getElementById('username');    // Grab username elmenet
  var txtAnswer = document.getElementById('answer');        // Grab answer element

  txtUsername.value = sessionStorage.getItem('username');   // Set value using session storage item info
  txtAnswer.value = sessionStorage.getItem('answer');

  txtUsername.addEventListener('click', function() {        // Save session storage info 
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('click', function() {
    sessionStorage.setItem('username', txtAnswer.value);
  }, false);
}
