let MakeDancer2 = function() {
    MakeDancer1.call(this);

}

MakeDancer2.prototype = Object.create(MakeDancer1.prototype);
MakeDancer2.prototype.constructor = MakeDancer2;