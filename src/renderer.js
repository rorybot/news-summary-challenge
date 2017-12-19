(function(exports) {
  function Renderer() {
  }

Renderer.prototype.view = function(values) {
  for(var key in values) {
    document.getElementById(key).innerHTML = values[key];
  }
};

var renderLink = function(note,index){
  link = "<a href='#$" + index + "'>" + note.substring(0, 20) + "</a>"
  return link
}

Renderer.prototype.renderLinks = function(notes){
  var renderedLinks = ""
  notes.forEach(function(note, index) {
      renderedLinks += renderLink(note.webTitle,index)
  });
  return "<ul class='note_list'>" + renderedLinks + "</ul>"
}

Renderer.prototype.singleNote = function (noteIndex, notes) {
  var note = notes[noteIndex];
  return "<div class='single_note'>" + note.returnNote() + "</div>";
};

exports.Renderer = Renderer;
})(this);
