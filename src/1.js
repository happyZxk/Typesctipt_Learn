"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "哈哈哈";
var arr = ["士大夫顺"];
var aa1 = [1, 2, 3];
var port = [1, "455"];
var aabb = [];
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 0] = "Boy";
    Gender[Gender["Girl"] = 1] = "Girl";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 8] = "TUESDAY";
})(Week || (Week = {}));
console.log(Week.MONDAY);
console.log(Week.TUESDAY);
console.log(0 /* Red */, 2 /* Blue */, 1 /* Yellow */);
// 任意类型 anyscript
// 第三方库没有定义类型 类型转换的时候 数据结构太复杂太灵活 any
// !强行断言
// let root: HTMLElement | null = document.getElementById("root");
// root!.style.color = "red";//强行断言不为空
// null 为空 undefined 未定义
// 他们都是其它类型的子类型,你可以把他们赋值给其它类型的变量
var myname1 = null;
var x;
x = 1;
x = null;
x = undefined;
// void 类型 空的 没有
function greeting(name) {
    console.log("hello" + name);
    return;
}
greeting("44");
// never 是其它类型的子类型,代表不会出现的值
function createError(message) {
    console.log(1);
    throw new Error("error");
    console.log(2);
}
// function sum(): never {
//     while (true) {
//         console.log("hello");
//     }
//     console.log("end point");
// }
var person2 = {
    Boy: Gender.Boy,
};
var num = 3 | 5;
console.log(num);
// 推论 猜
var name2 = 2;
name2 = 2;
var name3; //不赋值猜ts猜为any类型
// 自动在基本类型和对象类型之间切换
var name4 = "zxk";
console.log(name4.toLocaleUpperCase());
var isOk = true;
var isOk2 = Boolean(1);
// let isOk3:boolean = new Boolean(1); 报错
var name5;
name5 = "zxk";
name5 = 5;
console.log(name5.toFixed(10));
// 联合类型(多个类型中的一个)
var name6;
name6 = "zxk";
console.log(name6.toLocaleUpperCase());
name6 = 55;
console.log(name6.toFixed(0));
// 字面量类型(多个值中的某一个)
var Gender4;
Gender4 = 'Boy';
