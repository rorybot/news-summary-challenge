(function(exports) {
  function NewsGrabber() {}

  NewsGrabber.prototype.grabHeadlines = function(callback) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) { // request is done
            if (httpRequest.status === 200) { // successfully
                callback(JSON.parse(httpRequest.responseText)); // we're calling our method
            }
        }
    };
    httpRequest.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=headlines");
    httpRequest.send();
  };

  exports.NewsGrabber = NewsGrabber;
})(this);
