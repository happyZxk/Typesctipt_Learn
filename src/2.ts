// 函数定义
function hello(name: string): void {
    console.log('hello' + name);
}
// 函数表达式
type GetUserNameType = (firstName: string, lastName: string) => { name: string };
let getUserName: GetUserNameType = function (firstName: string, lastName: string): { name: string } {
    return {
        name: "5465"
    }
}
// 可选参数
function print1(name?: string, age?: number, home?: string) {

}
print1();
print1("zxk");
print1("zxk", 28);
// 默认参数

function ajax(url: string, method: string = 'GET') {
    console.log(url, method);
}
ajax("HTTP://localhost:8080", "POST")

// 剩余参数
function sum(...numbers: Array<number>) {
    return numbers.reduce((accure, item) => accure + item, 0)
}
console.log(sum(1, 2, 3));

// 函数重载
let obj: any = [];
function attr(val: string): void;
function attr(val: number): void;
function attr(val: any) {
    if (typeof val === 'string') {
        obj.name = val;
    } else if (typeof val === 'number') {
        obj.age = val;
    }
}
attr('zxk')

// ts写箭头函数跟js中一样
type DelayType = (ms: number) => void;
let delay: DelayType = (ms) => {
    setTimeout(function () {

    }, ms)
}


