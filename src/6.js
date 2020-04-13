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
(function (a) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.getName = function () {
            return "父类方法";
        };
        return Animal;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super.call(this) || this;
        }
        Cat.prototype.getName = function () {
            return "父类方法" + _super.prototype.getName.call(this);
        };
        return Cat;
    }(Animal));
})(a || (a = {}));
