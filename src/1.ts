export { }
let name: string = "哈哈哈";
let arr: string[] = ["士大夫顺"];
let aa1: Array<number> = [1, 2, 3];
let port: [number, string] = [1, "455"];
enum Gender {
    Boy,
    Girl
}

console.log(Gender.Boy);
console.log(Gender.Girl);

enum Week {
    MONDAY = 1,
    TUESDAY = 8
}

console.log(Week.MONDAY);
console.log(Week.TUESDAY);

const enum Colors {
    Red,
    Yellow,
    Blue
}
console.log(Colors.Red, Colors.Blue, Colors.Yellow);

// 任意类型 anyscript
// 第三方库没有定义类型 类型转换的时候 数据结构太复杂太灵活 any
// !强行断言
// let root: HTMLElement | null = document.getElementById("root");
// root!.style.color = "red";//强行断言不为空
// null 为空 undefined 未定义
// 他们都是其它类型的子类型,你可以把他们赋值给其它类型的变量

let myname1: string = null;
let x: number;
x = 1;
x = null;
x = undefined;

// void 类型 空的 没有
function greeting(name: string): void {
    console.log("hello" + name);
    return;
}
greeting("44")
// never 是其它类型的子类型,代表不会出现的值
function createError(message: string): never {
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


let person2 = {
    Boy: Gender.Boy,
}
let num = 3 | 5;
console.log(num);
// 推论 猜
let name2 = 2;
name2 = 2;
let name3;//不赋值猜ts猜为any类型
// 自动在基本类型和对象类型之间切换

let name4: string = "zxk";
console.log(name4.toLocaleUpperCase());

let isOk: boolean = true;
let isOk2: boolean = Boolean(1);
// let isOk3:boolean = new Boolean(1); 报错

let name5: string | number;
name5 = "zxk";
name5 = 5;
console.log(name5.toFixed(10));

// 联合类型(多个类型中的一个)
let name6: string | number;
name6 = "zxk";
console.log((name6 as string).toLocaleUpperCase());
name6 = 55;
console.log((name6 as number).toFixed(0));

// 字面量类型(多个值中的某一个)
let Gender4: 'Boy' | 'GIRL';
Gender4 = 'Boy';
