let first = function(val) {
    // console.log("constructor");
    this.initial = "first";
}

first.direct = function() {
    console.log("direct call", this.initial);
}

first.prototype.add = function(val) {
    return this.initial;
}

function second(val) {
    this.initial = "second";
    first.call(this);
    var t = first.direct.bind(this);
    t();
}


//second.prototype = Object.create(first.prototype);
//second.prototype.constructor = second;
var obj = new second(5);


//console.log(obj.direct());