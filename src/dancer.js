// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');


  this.step(timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);

};

Dancer.prototype.step = function(timeBetweenSteps){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // var that = this;
  //console.log('makeDancer context', this);
  if (timeBetweenSteps === undefined) {
    return;
  }
  var that = this;
  setTimeout(function(){
    that.step(timeBetweenSteps);
  }, timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: top,
    left: left
  };
  // console.log(this.$node);
  this.$node.css(styleSettings);
};

Dancer.prototype.bind = function(context) {
  var fn = this;
  return function() {
    return fn.apply(context, arguments)
  }
}