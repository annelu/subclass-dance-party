var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Dancer.apply(this, arguments);
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);

   // toggle() is a jQuery method to show/hide the <span> tag.
   // * See http://api.jquery.com/category/effects/ for this and
   // * other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.lineup = function() {
  this.$node.css('top', 'inherit');
  this.$node.css('bottom', 0);
}