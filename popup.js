document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = 'http://www.ratemyprofessors.com/campusRatings.jsp?sid=1132';
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://www.ratemyprofessors.com/campusRatings.jsp?sid=1132';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);