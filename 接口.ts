// interface Person {
//     name: string,
//     sex: string,
//     age: number
// }
//
// function f3(person: Person) {
//     console.log(`姓名${person.name}${person.sex}${person.age}`);
// }
//
// f3({name: "", sex: "男", age: 4})
//
// //类
// class Dog {
//     dogName: string;
//     dogAge: number;
//     dogSex: string;
//
//     constructor(dogName: string, dogAge: number, dogSex: string) {
//         this.dogName = dogName;
//         this.dogAge = dogAge;
//         this.dogSex = dogSex;
//     }
//
//     eat(foods: string) {
//         console.log(this.dogName, this.dogAge, this.dogSex, foods);
//     }
// }
//
// let wc = new Dog("SD", 565, "SDF");
// wc.eat("fsdfsd")

//定义一个接口
// interface Person {
//     pName: string,
//     pAge: number,
//     pJob: string
// }
//
// let person: Person;
// person = {
//     pJob: "string",
//     pAge: 5,
//     pName: "string",
// }
// console.log(person);
//
// function f3(person) {
//     console.log(`我是:${person.pName} 年龄 ${person.pAge}`)
// }
//
// f3(person);

//2接口-可选属性 在属性后加?代表可传可不传
//好处对某些属性进行预定义 2 捕获错误
// interface Circle {
//     color: string,//颜色
//     area: number,//面积
// }
// interface CircleConfig {
//     color?: string
//     radius?: number
// }
// function createCircle(config: CircleConfig): Circle {
//     let newCircle = {color: "green", area: 100};
//     if (config.color) {
//         newCircle.color = config.color
//     }
//     if (config.radius) {
//         newCircle.area = Math.PI * config.radius
//     }
//     return newCircle;
// }
// let myCircle1 = createCircle({radius: 55});
// let myCircle2 = createCircle({color: "red"});

// interface Circle {
//     color: string,//颜色
//     area: number,//面积
// }
//
// interface CircleConfig {
//     color?: string
//     radius?: number
// }
//
// function createCircle(config: CircleConfig): Circle {
//     let newCircle = {color: "green", area: 100};
//     if (config.color) {
//         newCircle.color = config.color
//     }
//     if (config.radius) {
//         newCircle.area = Math.PI * config.radius
//     }
//     return newCircle;
// }
//
// let myCircle1 = createCircle({radius: 55});
// let myCircle2 = createCircle({color: "red"});
//
// //3.只读属性 属性前加readonly
// interface FullName {
//     readonly firstName: string
//     readonly lastName: string
// }
//
// let p: FullName = {firstName: '张', lastName: '三丰'};
// console.log(p);
// // p.lastName = 'sd';//这样会报错
// // console.log(p);
//
// //TS  ReadonlyArray<T> Array<T>
// let arr: number[] = [1, 2, 3, 4, 5, 6];
// arr.push(10)
// let ra: ReadonlyArray<number> = arr;
// console.log(ra);
// arr.push(55)
// // ra.push(44) 只读不能push
// arr = ra as number[];
// arr.push(55)
// let str0: string = "sdds";
// let str: string = (<string>str0).substr(0, 5);


//4绕过额外的属性检测
// interface Circle {
//     color: string,//颜色
//     area: number,//面积
// }
//
// interface CircleConfig {
//     color?: string
//     radius?: number
// }
//
// function createCircle(config: CircleConfig): Circle {
//     let newCircle = {color: "green", area: 100};
//     if (config.color) {
//         newCircle.color = config.color
//     }
//     if (config.radius) {
//         newCircle.area = Math.PI * config.radius * config.radius
//     }
//     return newCircle;
// }
// let myCircle = createCircle({color: "red", radius: 100});

// 4.1类型断言
// let myCircle = createCircle({color: "red", radius: 10, radiusss: 100} as CircleConfig);

//4.2通过字符串的索引签名
// interface Circle {
//     color: string,//颜色
//     area: number,//面积
// }
//
// interface CircleConfig {
//     color?: string
//     radius?: number
//
//     [propsName: string]: any//字符串的索引签名
// }
//
// function createCircle(config: CircleConfig): Circle {
//     let newCircle = {color: "green", area: 100};
//     if (config.color) {
//         newCircle.color = config.color
//     }
//     if (config.radius) {
//         newCircle.area = Math.PI * config.radius * config.radius
//     }
//     return newCircle;
// }
//
// let myCircle = createCircle({color: "red", radius: 10, radiusss: 100});

//4.3
// interface Circle {
//     color: string,//颜色
//     area: number,//面积
// }
//
// interface CircleConfig {
//     color?: string
//     radius?: number
// }
//
// function createCircle(config: CircleConfig): Circle {
//     let newCircle = {color: "green", area: 100};
//     if (config.color) {
//         newCircle.color = config.color
//     }
//     if (config.radius) {
//         newCircle.area = Math.PI * config.radius * config.radius
//     }
//     return newCircle;
// }
//
// let circleoption = {color: "red", radius: 10, radiusss: 100};
// let myCircle = createCircle(circleoption);

//5.函数类型
// interface CompareFunc {
//     (first: number, last: number): boolean
// }
//
// let myCompare1: CompareFunc = function (first: number, last: number): boolean {
//     return first > last;
// }
//
// let myCompare2: CompareFunc = function (a: number, b: number): boolean {
//     return a > b;
// }
//
// let myCompare3: CompareFunc = function (a, b) {
//     return a > b
// }
// myCompare3(10, 20)

//6可索引类型(针对返回值)
// interface StrArr {
//     [index: number]: string
// }
// let myArr: StrArr = ['it', 'like']
// let str: string = myArr[5]
// console.log(str);

//7类类型(接口约束)只描述公共的私有的不做约束
//7.1属性约束
// interface ClockInterface {
//     currentTime: Date
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date
//
//     constructor(h: number, m: number) {
//         console.log(h, m);
//     }
// }

// 7.2描述一个方法
// interface ClockInterface {
//     currentTime: Date
//
//     setTime(d: Date): boolean
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date
//
//     constructor(h: number, m: number) {
//         console.log(h, m);
//     }
//
//     setTime(d: Date) {
//         console.log(d);
//         return true
//     }
// }


//类静态部分(约束不了) 和 实例部分(可约束)
// interface ClocConstructor {
//
// }
// class Clock implements ClocConstructor {
//     constructor(h: number, m: number) {
//
//     }
// }

//9.接口的继承
// interface Animal {
// //    品种
//     breed: string
// }
//
// interface Cat extends Animal {
// //    颜色
//     color: string
// }
//
// let cat = {} as Cat;
// cat.color = "red";
// cat.breed = "蓝猫";

//9.1一个接口继承多个接口
interface Animal {
//    品种
    breed: string
}

//哺乳动物
// interface Mammal {
//     //腿的数量
//     leg: number
// }
//
// interface Cat extends Animal, Mammal {
//     //    颜色
//     color: string
// }
//
// let cat1 = {} as Cat;
// cat1.color = "black";
// cat1.breed = "黑猫";
// cat1.leg = 4;









