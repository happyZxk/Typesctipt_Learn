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
// 如何定义类
var a;
(function (a) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var p1 = new Person("ZXK", 50);
    console.log(p1.name);
    console.log(p1.age);
})(a || (a = {}));
var b;
(function (b) {
    // 存取器 getter setter
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.myname = name;
            this.age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.myname;
            },
            set: function (newVal) {
                this.myname = newVal.toLocaleLowerCase();
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p1 = new Person("ZXK", 50);
    console.log(p1.name);
})(b || (b = {}));
var c;
(function (c) {
    // 存取器 getter setter
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
        }
        return Person;
    }());
    var p = new Person("ZXK", 5);
    console.log(p.name);
})(c || (c = {}));
// 继承 ts
/**
 * 子类继承父类后子类就有了父类中的属性和方法
 * 访问修饰符
 * public 自己 自己的子类 和其他类都可以访问
 * protected 受保护的 自己和自己的子类都能访问,其他类不能,new的实例不能访问
 * private  私有的只能自己访问,自己的子类和其它类都不能访问,包括自己new 的实例
 *
 */
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age, amount) {
            this.name = name;
            this.age = age;
            this.amount = amount;
        }
        Person.prototype.getName = function () {
            return this.name + this.amount;
        };
        Person.prototype.setName = function (newName) {
            this.name = newName;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, amount, stuno) {
            var _this = _super.call(this, name, age, amount) || this;
            _this.stuno = stuno;
            return _this;
        }
        Student.prototype.getstuno = function () {
            // return this.stuno + this.amount;不能
            return this.stuno;
        };
        Student.prototype.setstuno = function (newStuno) {
            this.stuno = newStuno;
        };
        Student.prototype.getType = function () {
            return Student.type;
        };
        Student.type = "学生类";
        return Student;
    }(Person));
    var stu = new Student("ZXK", 20, 2000, 10001);
    console.log(stu.getName());
    console.log(Student.type);
    console.log(stu.getType());
    // console.log(stu.amount);
})(d || (d = {}));
