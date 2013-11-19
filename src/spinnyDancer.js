var SpinnyDancer = function(top, left){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="spinnyDancer"></span>');
  this.setPosition(top, left);
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.lineup = function() {
  this.$node.css('right', 0);
  this.$node.css('left', 'inherit');
}