var Dancer1 = function(top, left, timeBetweenSteps) {
    // this.$node = $('<span id="bulldog" class="dancer"></span><img src="discobulldog.gif" alt="bulldog">');
    this.image = '<img id="dog" src="discobulldog.gif" alt="bulldog">'
    BlinkyDancer.call(this, top, left, timeBetweenSteps);
}


Dancer1.prototype = Object.create(BlinkyDancer.prototype);
Dancer1.prototype.constructor = Dancer1;

