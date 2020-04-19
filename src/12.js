"use strict";
var a;
(function (a) {
    var p = {
        name: "zxl",
        fly: function () {
        },
        eat: function () {
        }
    };
})(a || (a = {}));
// typeof 可以获取一个变量的类型
var b;
(function (b) {
    // type Person{
    //     name: string;
    //     age: number
    // }
    var p = {
        name: "zxcl",
        age: 10
    };
    var p2 = {
        name: "zxp2",
        age: 55
    };
    var myname = "sdfhsfj";
    var myage = 45;
    function getValueByKey(val, key) {
        return val[key];
    }
    var person3 = {
        name: "ZXL",
        age: 52,
        gender: "femate"
    };
    getValueByKey(person3, "name");
    var person4 = {
        name: "ZLX",
        age: 5,
        gender: 'femate'
    };
    var person4s = {
        name: "sdfs"
    };
    var p4 = {
        name: "ZLX",
        age: 5,
        gender: 'femate'
    };
    var p6 = {
        name: "ZLX",
        age: 5,
        gender: 'femate'
    };
    var x = {
        name: "sdf",
        age: 444
    };
})(b || (b = {}));
