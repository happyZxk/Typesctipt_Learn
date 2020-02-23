// // 1.基本示例
// //命名函数
// function f3(x: number, y: number): number {
//
//     return x > y ? x : y
// }
//
// //匿名函数
// let maxB = function (x: number, y: number): number {
//     return x > y ? x : y
// }
//
// let maxC = (x: number, y: number) => {
//     return x > y ? x : y
// }
//
// let num10: number = 100;
//
// function func(num2, num3): number {
//     return num1 = num2 + num3;
// }
//
// //可选参数(必须位于必选参数后面 y可选加?)
// function f6(x: number, y?: number): number {
//     if (y) {
//         return x > y ? x : y;
//
//     } else {
//         return x
//     }
// }
//
// let res = f6(10);
// let res1 = f6(10, 20);

// function f3(x: number, y: number): void {
//     console.log(x, y);
// }
//
// let a = null;
// f3(1, a);

// 3.剩余参数
function sum(x: number, ...resetNumber: number[]): number {
    let result = x;
    for (let i = 0; i < resetNumber.length; i++) {
        result += resetNumber[i]
    }
    return result
}

let results = sum(1, 2, 3, 4, 5, 6)
console.log(results);
