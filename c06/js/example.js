var username, noteName, textEntered, target;
noteName = document.getElementById('noteName');   // element that holds note
noteInput = document.getElementById('noteInput'); // input for writing the note

function writeLabel(e) {
  if (!e) {
    e = window.event;
  }
  target = e.target || e.srcElement;              // Get target of event
  textEntered = e.target.value;                   // Value of the element
  noteName.textContent = textEntered;             // Update note text
}

// record/pause
function recorderControls(e) {
  if (!e) {
    e = window.event;
  }
  target = e.target || e.srcElement;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
  switch (target.getAttribute('data-state')) {    // Get the data-state attribute
    case 'record':                                // If its value is record
      record(target);                             // Call record() function
      break;                                      // Exit
    case 'stop':
      stop(target);
      break;
  }
}

function record(target) {                         // Set data-state attr & text to stop
  target.setAttribute('data-state', 'stop');
  target.textContent = 'stop';
}

function stop(target) {
  target.setAttribute('data-state', 'record');
  target.textContent = 'record';
}

if (document.addEventListener) {
  document.addEventListener('click', function(e) {
    recorderControls(e);
  }, false);
  noteName.addEventListener('input', writeLabel, false);
} else {
  document.attachEvent('onclick', function(e) {
    recorderControls(e);
  });
  noteName.attachEvent('onkeyup', writeLabel, false);
}
