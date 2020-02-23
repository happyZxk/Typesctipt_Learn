var Greeters = /** @class */ (function () {
    function Greeters(message) {
        this.greeting = message;
    }
    Greeters.prototype.greet = function () {
        return 'Hello,' + this.greeting;
    };
    return Greeters;
}());
var green;
var green1 = new Greeters('消息');
console.log(green1.greet());
