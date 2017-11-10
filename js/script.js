function checkLength(e, minLength) {
  var el, elMsg;
  if (!e) {
    e = window.event;
  }
  el = e.target || e.srcElement;
  elMsg = el.nextSibling;

  if (el.value.length < minLength) {
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {
    
  }
}
