function checkLength(e, minLength) {
  var el, elMsg;
  // if event object doesn't exist
  if (!e) {
    // use IE fallback
    e = window.event;
  }
  // get target of event, using IE fallback
  el = e.target || e.srcElement;
  // get its next sibling
  elMsg = el.nextSibling;

  // if length is too short set msg
  if (el.value.length < minLength) {
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {
    // clear msg
    elMsg.innerHTML = '';
  }
}

// get username input
var elUsername = document.getElementById('username');
// if event listener supported
if (elUsername.addEventListener) {
  // on blur event
  elUsername.addEventListener('blur', function(e) {
    // call checkLength()
    checkLength(e, 5);
    // capture in bubble phase
  }, false);
} else {
  // IE fallback onblur
  elUsername.attachEvent('onblur', function(e) {
    // call checkLength()
    checkLength(e, 5);
  });
}
