function init(val) {


    this.val = val || "default";
    this.second = function() {
        console.log("this function is the second function of init=", this.val);
    }

}

init.prototype.length = function() {
    return this.val.length;
}

function init2(val) {
    init.call(this, val)
}

init2.prototype = Object.create(init.prototype);

var b = new init2();
console.log(b.length());