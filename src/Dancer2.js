var Dancer2 = function(top, left, timeBetweenSteps) {
    this.image = '<img id="dog" src="Shiba.jpg" alt="shiba">'
    BlinkyDancer.call(this, top, left, timeBetweenSteps);
}

Dancer2.prototype = Object.create(Dancer1.prototype);
Dancer2.prototype.constructor = Dancer2;