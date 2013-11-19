var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // console.log(this);
  // this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
  // console.log(this);
  // console.log('this.oldStep', this.oldStep);
  // console.log('makeDancer.prototype.step', makeDancer.prototype.step);
  // this.oldStep = 'something';

  // console.log(this);

  // return blinkyDancer;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// makeBlinkyDancer.prototype.oldStep = function(){
  // makeDancer.prototype.step();
// };
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this.oldStep());
  console.log('BlinkyDancer', this);
  debugger;

  // this.oldStep.call(makeDancer, timeBetweenSteps);
  this.oldStep(timeBetweenSteps);

   // toggle() is a jQuery method to show/hide the <span> tag.
   // * See http://api.jquery.com/category/effects/ for this and
   // * other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};