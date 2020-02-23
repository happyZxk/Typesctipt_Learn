// 字符串
var dogName = "4445";
var dogSex = "公司";
var dogAge = 125;
var intrDog = "\n    \u6C34\u7535" + dogName + "\n    ";
console.log(intrDog);
//数字
//2 8 16 10
var num1 = 5; //10
var num2 = 0x10; //16
var num3 = 8; //8
var num4 = 16; //2
console.log(num1, num2, num3, num4);
//3.布尔
var flag = false;
console.log(flag);
//4.数组(2中方式)
var numArr = [1, 2, 3];
console.log(numArr);
var numArr1 = ["sd", "sdf"];
console.log(numArr1);
var booleArr = [0, "55"];
console.log(booleArr);
//5元组
var tuple = ["sdf", 55, true];
console.log(tuple);
console.log(tuple[0]);
//6.枚举 enum
var Sex;
(function (Sex) {
    Sex[Sex["man"] = 1] = "man";
    Sex[Sex["women"] = 2] = "women";
})(Sex || (Sex = {}));
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var sex1 = Sex.man;
var sex2 = Sex.women;
console.log(sex1, sex2); //0,1
var sexName = Sex[1];
var sexName1 = Sex[2];
console.log(sexName, sexName1);
//7.any
var arr = [1, "sef", true, null];
//8.void
var str;
str = null;
str = undefined;
console.log(str);
//9null 和undefined
var str1 = undefined;
var str2 = undefined;
var str3 = undefined;
var str4 = null;
var str5 = null;
var str6 = undefined;
console.log(str1, str2, str3, str4, str5, str6);

//10 naver
// function error(msg) {
//     throw new Error(msg);
// }
//
// error("发生未知错误");

//11 object
let obj1: object = {name1: "jsjdj", age: 18};
console.log(obj1);
obj1 = [1, 2, 3];
console.log(obj1);
//类型断言
let obj: any = 'like it';
//方式一
let str7: string = obj.substr(0, 3);
console.log(str7);
let str8: string = (<string>obj).substr(0, 3);
//方式二
let str9: string = (obj as string).substr(0, 4);
//var let const
var str10: string = '廖科';
let str11: string = '士大夫精神';

//块级作用域
function f4(flag: boolean): number {
    let a = 99;
    if (flag) {
        let b = a + 1;
        return b
    }
}

let aa: number = null;
let vb: number = undefined;
console.log(f4(false));

// function f5(x) {
//     let x = 100;//bu ok
// }
function f5(flag: boolean, x: number): number {
    if (flag) {
        let x = 44;
        return x;
    }
}

console.log(f5(true, 66));
const CAT_NAME: string = '喵喵'
const CAT = {
    name: CAT_NAME,
    age: 8
}
CAT.age = 7554;

//解构
let arr8: number[] = [1, 5, 9];
let arr6: [number, string] = [1, "2"];
let arr7: Array<number | string> = [1, 2, 3, 4];
let [one, two] = arr7;
console.log(one, two);

//变换位置
[one, two] = [two, one];
console.log(one, two);
let [first, ...reset] = [1, 2, 3, 45, 5];
console.log(first, reset);

enum Sex1 {
    Man, Woman

}

interface Person {
    personName: string,
    personage: number,
    personsex: Sex1
}

let person: Person = {personName: "sds", personage: 99, personsex: Sex1.Man};
let {personName, personage, personsex} = person;
console.log(personName, personage, personsex);











