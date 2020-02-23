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
/*
* 不添加修饰符默认的是public
* public
* private 添加改属性后继承的类不能访问
* static 添加这个属性该属性只能通过类名访问
* */
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return People;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(school) {
        var _this = _super.call(this, "郑成功", 55) || this;
        _this.school = school;
        return _this;
    }
    Teacher.prototype.print = function () {
        return this.name + ":" + this.school;
    };
    return Teacher;
}(People));
var t = new Teacher("张北一种");
console.log(t.print());
