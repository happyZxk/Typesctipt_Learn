"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var a;
(function (a) {
    function enhancer(target) {
        target.prototype.xx = 'xx';
        target.prototype.yy = 'yy';
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.xx);
    console.log(p.yy);
})(a || (a = {}));
// 把类整个替换
var b;
(function (b) {
    // target 是类的定义 
    function enhancer(target) {
        console.log("target", target);
        target.prototype.name = "zxl";
        target.prototype.age = 20;
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.age);
    console.log(p.name);
})(b || (b = {}));
// 属性装饰器
var c;
(function (c) {
    // target 如果装饰的是一个普通属性的话,这个target指向类的原型(Person.prototype)
    // target 如果装饰的是一个static,这个target指定类的定义
    function upperCase(target, propertyName) {
        var value = target[propertyName];
        var getter = function () { return value; };
        var setter = function (newVal) {
            value = newVal.toUpperCase();
        };
        delete target[propertyName];
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
    function prototynoEnumerable(flag) {
        return function (target, methodName) {
        };
    }
    function methodnoEnumerable(flag) {
        return function (target, methodName, propertyDescriptor) {
            propertyDescriptor.enumerable = flag;
        };
    }
    function setAge(age) {
        return function (target, methodName, propertyDescriptor) {
            target.age = age;
        };
    }
    function toNumber(target, methodName, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        propertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseFloat(item); });
            return oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'zxl';
        }
        Person.prototype.getName = function () {
            console.log("getName");
        };
        Person.getAge = function () {
        };
        Person.prototype.sum = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return arg.reduce(function (accu, item) { return accu + item; }, 0);
        };
        __decorate([
            upperCase,
            prototynoEnumerable(false)
        ], Person.prototype, "name", void 0);
        __decorate([
            methodnoEnumerable(false)
        ], Person.prototype, "getName", null);
        __decorate([
            toNumber
        ], Person.prototype, "sum", null);
        __decorate([
            setAge(100)
        ], Person, "getAge", null);
        return Person;
    }());
    var p = new Person();
    p.name = "jiagou";
    console.log(p.name);
    console.log(Person.age);
    for (var key in p) {
        console.log("key", key);
    }
    console.log(p.sum(1, '2', '3'));
})(c || (c = {}));
var d;
(function (d) {
    // 参数装饰器 方法参数
    /**
     * target 类的原型
     * methodName 方法名
     * paramsIndex 参数索引
     *
     * */
    function addAge(target, methodName, paramsIndex) {
        console.log(target, methodName, paramsIndex);
        target.age = 10;
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.login = function (username, password) {
            console.log(this.age, username, password);
        };
        __decorate([
            __param(1, addAge)
        ], Person.prototype, "login", null);
        return Person;
    }());
    var p = new Person();
    p.login('zxk', "8965");
})(d || (d = {}));
// 装饰器执行顺序
// 属性方法装饰器最新执行(他们两个的顺序是谁先谁先执行)
// 方法装饰器有参数装饰器时先参数在方法
// 类装饰器最后执行(有多个的情况,采用就近原则谁距离类近谁先执行)
