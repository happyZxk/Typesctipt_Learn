"use strict";
// 任意属性
var a;
(function (a) {
    var obj = {
        x: 1,
        z: 1,
        y: 2
    };
})(a || (a = {}));
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.SpeakChinese = function () {
        };
        Person.prototype.speak = function () {
        };
        return Person;
    }());
    var cicle = { PI: 3.14, radius: 5 };
    var cost = function (price) {
        return price * 0.8;
    };
    console.log(cost(44));
    var arr = ["52", "75"];
})(b || (b = {}));
var c;
(function (c) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function (word) {
        };
        return Dog;
    }());
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    function createAnimal(clazz, name) {
        return new clazz(name);
    }
    createAnimal(Animal, "zxl");
})(c || (c = {}));
