var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.tell = function () {
        return this.name;
    };
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
}());
var h = new Hello();
h.name = "地方势力对抗";
console.log(h.tell());
