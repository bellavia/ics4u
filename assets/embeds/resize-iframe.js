window.addEventListener('message', function (event) {
  if (!event.data || event.data.kind !== 'resize-iframe') return;
  var iframes = document.getElementsByTagName('iframe');
  for (var i = 0; i < iframes.length; i++) {
    if (iframes[i].contentWindow === event.source) {
      iframes[i].style.height = event.data.height + 'px';
      break;
    }
  }
});
