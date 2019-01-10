var MakeDancer1 = function() {
    BlinkyDancer.call(this);
}

MakeDancer1.prototype = Object.create(BlinkyDancer.prototype);
MakeDancer1.prototype.constructor = MakeDancer1;

