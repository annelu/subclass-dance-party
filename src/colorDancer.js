var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node = $('<span class="colorDancer"></span>');
  this.setPosition(top, left);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

ColorDancer.prototype.lineup = function() {
  this.$node.css('left', 0);
}