namespace a {
    // 接口的兼容性 ts跟类型没有关系,只跟属性有关
    interface Animal {
        name: string
        age: number
    }
    // 接口泛型(描述函数)
    interface Calculate {
        <T>(a: T, b: T): T
    }
    interface Person {
        name: string
        age: number
        speak: (words: string) => void//(描述属性)
    }

    function getName(animal: Animal): string {
        return animal.name;
    }
    let p: Person = {
        name: "zxk",
        age: 11,
        speak() { }
    }

    console.log(getName(p));

    let num2: {
        toString(): string
    }
    let str2: string = 'zxk'
    num2 = {
        toString() { return "x" }
    }
}

// 类的兼容性
namespace b {
    // 类的兼容性
    class Animal {
        name: string
    }

    class Bird extends Animal {
        swing: number
    }
    let a: Animal;
    a = new Bird()
    let b: Animal;
    b = { name: "42" }
}
namespace c {
    type sumFunction = (a: number, b: number) => number
    let sum: sumFunction;
    function f1(a: number, b: number): number {
        return a
    }
    sum = f1;
    function f2(a: number): number {
        return a
    }
    sum = f2;

    function f3(): number {
        return 11
    }
    sum = f3;
    function f4(a: number, b: number, c: number): number {
        return a
    }
    // sum = f4;参数可以少但是不能多

    type GetPerson = () => { name: string, age: number }
    let getperson: GetPerson;
    function g1() {
        return { name: "string", age: 10 }
    }
    getperson = g1;

    function g2() {
        return { name: "string" }
    }
    // getperson = g2; 返回值类型不能少参数

    function g3() {
        return { name: "string", age: 10, sex: "nan" }
    }
    getperson = g3;

    interface T {
        name: string
    }

    let t: T = { name: "ZXK" };

    // 函数参数的协变
    type logFunc = (a: number | string) => void;
    let log: logFunc;
    function log1(a: number | string | boolean) {
        console.log(a);
    }
    log = log1;

    // 泛型的兼容性,判断兼容性的时候先判断具体类型在进行兼容性判断
    interface Empty<T> {
    }

    let x: Empty<string>;
    let y: Empty<number>;
    x = y;

    interface NotEmptyString<T> {
        data: string
    }

    interface NotEmptyNumber<T> {
        data: number
    }

    // 枚举的兼容性
    enum Colors {
        Red, Yellow
    }
    let c: Colors;
    c = Colors.Red;
    c = 1;
    let d: number;
    d = Colors.Yellow;

}

