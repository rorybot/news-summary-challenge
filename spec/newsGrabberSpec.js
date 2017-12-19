'use strict';

describe('newsgrabber', function() {

  var newsGrabber;

  beforeEach(function() {
    newsGrabber = new NewsGrabber();
  });


    describe('grab headlines', function() {
      it('can grab them', function() {
                expect(newsGrabber.tester(function(value){
                  return value
                })).toEqual("No")
      });
    });


});
