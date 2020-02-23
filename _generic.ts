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
// function getNum<T>(num: T): T {
//     console.log(num.length);
//     return num;
// }
//
// getNum(6556)

//
// function getNum<T>(num: T[]): T[] {
//     console.log(num.length);
//     return num;
// }
// getNum([6556])
//


//2泛型类
//作用于实例部分,静态属性不能使用这个泛型
// class Add<T> {
//     zeroValue: T
//     add: (x: T, y: T) => T
// }

//3.1 number 类型
// let a = new Add<number>()
//
// a.zeroValue = 111;
// console.log(a.add(10, 20));

// 3.2 其它类型
// let a = new Add<string>();
// a.zeroValue = "2";
// a.add("4", "5")

// 4泛型约束

//传进来东西必须包含length属性
// interface LengthWise {
//     length: number
// }
//
// function getNum<T extends LengthWise>(num: T): T {
//     console.log(num.length);
//     return num;
// }
//
// getNum('100')
// getNum({value: 10, length: 1})

//5.再泛型约束中使用类型参数
//(key必须是obj其中的一个属性)

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let person = {name: "笑料", age: 20, sex: "女"}
getProperty(person, "name");
getProperty(person, "age");
getProperty(person, "sex");
