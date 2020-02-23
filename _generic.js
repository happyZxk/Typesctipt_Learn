// //泛型
// // 1.
// function getStr<T>(num: T): T {
//     return num;
// }
//
// let r1 = getStr<string>("122");
//
// let r2 = getStr<number>(10);
//扩充
function getNum(num) {
    console.log(num.length);
    return num;
}
getNum(["6556"]);
//
