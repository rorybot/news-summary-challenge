(function(exports) {
  function HeadlinesViewModel() {
  }


HeadlinesViewModel.prototype.formatHeadlines = function(initializedNewsgrabber){
  newsgrabber.headlines
}


HeadlinesViewModel.prototype.displayHeadlines = function (newsgrabber) {
  var values = {list_of_headlines:newsgrabber.headlines()}

  renderer.view(values)
};



  exports.HeadlinesViewModel = HeadlinesViewModel;
})(this);