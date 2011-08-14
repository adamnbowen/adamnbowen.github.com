$.domReady ->
  $('abbr[title]').each ->
    title = this.getAttribute 'title'
    this.setAttribute 'data-title', title
    this.removeAttribute 'title'
