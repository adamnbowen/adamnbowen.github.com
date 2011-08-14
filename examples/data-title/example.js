(function() {
  $.domReady(function() {
    return $('abbr[title]').each(function() {
      var title;
      title = this.getAttribute('title');
      this.setAttribute('data-title', title);
      return this.removeAttribute('title');
    });
  });
}).call(this);
