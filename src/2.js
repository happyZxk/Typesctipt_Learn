"use strict";
// 函数定义
function hello(name) {
    console.log('hello' + name);
}
var getUserName = function (firstName, lastName) {
    return {
        name: "5465"
    };
};
// 可选参数
function print1(name, age, home) {
}
print1();
print1("zxk");
print1("zxk", 28);
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax("HTTP://localhost:8080", "POST");
// 剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (accure, item) { return accure + item; }, 0);
}
console.log(sum(1, 2, 3));
// 函数重载
var obj = [];
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
attr('zxk');
var delay = function (ms) {
    setTimeout(function () {
    }, ms);
};
