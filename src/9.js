"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
(function (a_1) {
    function getName(animal) {
        return animal.name;
    }
    var p = {
        name: "zxk",
        age: 11,
        speak: function () { }
    };
    console.log(getName(p));
    var num2;
    var str2 = 'zxk';
    num2 = {
        toString: function () { return "x"; }
    };
})(a || (a = {}));
// 类的兼容性
var b;
(function (b_1) {
    // 类的兼容性
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bird;
    }(Animal));
    var a;
    a = new Bird();
    var b;
    b = { name: "42" };
})(b || (b = {}));
var c;
(function (c_1) {
    var sum;
    function f1(a, b) {
        return a;
    }
    sum = f1;
    function f2(a) {
        return a;
    }
    sum = f2;
    function f3() {
        return 11;
    }
    sum = f3;
    function f4(a, b, c) {
        return a;
    }
    var getperson;
    function g1() {
        return { name: "string", age: 10 };
    }
    getperson = g1;
    function g2() {
        return { name: "string" };
    }
    // getperson = g2; 返回值类型不能少参数
    function g3() {
        return { name: "string", age: 10, sex: "nan" };
    }
    getperson = g3;
    var t = { name: "ZXK" };
    var log;
    function log1(a) {
        console.log(a);
    }
    log = log1;
    var x;
    var y;
    x = y;
    // 枚举的兼容性
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = Colors.Red;
    c = 1;
    var d;
    d = Colors.Yellow;
})(c || (c = {}));
