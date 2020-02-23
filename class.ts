//1. 基本使用
// class Cat {
//     catName: string
//     constructor(catName: string) {
//         this.catName = catName
//     }
//     say() {
//         return '大家好' + this.catName;
//     }
// }
//
// let cat = new Cat('小黑猫')
// console.log(cat.say());

//2.继承
// class Animal {
//     animalName: string
//     animalAge: number
//
//     constructor(animalName: string, animalAge: number) {
//         this.animalName = animalName
//         this.animalAge = animalAge
//     }
//
//     say() {
//         return '大家好' + this.animalName + "今年" + this.animalAge + "岁";
//     }
// }
//
// class Dog extends Animal {
//     // 品种
//     breed: string
//
//     constructor(breed: string, dName: string, dAge: number) {
//         super(dName, dAge)
//         this.breed = breed;
//     }
//
//     logBreed() {
//         return `我的品种是${this.breed}`;
//     }
//
// }
//
// let dog = new Dog("小土豆", "土狗", 18)
// console.log(dog.say());
// console.log(dog.logBreed());

// 3.复杂继承继承
// class Animal {
//     name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
// //    走动
//     move(distance: number = 0) {
//         console.log(`${this.name}走动了${distance}米`);
//
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//
//     //    走动
//     move(distance: number = 10) {
//         console.log(`我是爬行的...`);
//         //    调用父类的move
//         super.move(distance)
//     }
//
// }
//
// class Horse extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//
//     //    飞奔
//     move(distance: number = 50) {
//         console.log(`我是飞奔的...`);
//         //    调用父类的move
//         super.move(distance)
//     }
// }
//
// let snake: Snake = new Snake('小青蛇');
//
// let horse: Animal = new Horse('白龙马')
//
// snake.move()
// horse.move(70)

// 4.公共 私有 受保护 修饰符
// 4.1公共的 成员默认都是公共的
// class Animal {
//     public name: string
//
//     public constructor(name: string) {
//         this.name = name
//     }
//
//     //走动
//     public move(distance: number = 0) {
//         console.log(`${this.name}走动了${distance}米`);
//     }
// }

// 4.2私有的 只能在自己的方法中通过this调用(实例不能调用)
// class Animal {
//     private name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
//
//     //走动
//     move(distance: number = 0) {
//         console.log(`${this.name}走动了${distance}米`);
//     }
// }
//
// class Cat extends Animal {
//     constructor() {
//         super("Cat")
//     }
// }
//
// class Dog {
//     private name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
// }
//
// let animal1 = new Animal("猪");
// let cat1 = new Cat();
// let dog1 = new Dog("猪");
// animal1 = cat1;

//4.3受保护的 protected 可以在继承中通过this访问,实例的访问不了
// class Person {
//     protected name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
// }
//
// class Emplooyee extends Person {
// //    公司
//     company: string
//
//     constructor(name: string, company: string) {
//         super(name)
//         this.company = company
//     }
//
//     logMsg() {
//         return `我叫${this.name},我在${this.company}工作`
//     }
// }
//
// let p = new Emplooyee('科比', 'NBA');
//
// console.log(p.logMsg());


//5. readonly 关键字将属性设置为只读的
//只读属性必须在声明或构造函数里被初始化
// class Person {
//     readonly name: string
//
//     constructor(name: string) {
//         this.name = name
//     }
// }
//
// let p = new Person("SD");
// console.log(p.name);

//6.参数属性(等价于5)
/*
* 声明和赋值合并至一处
* 参数属性通过给构造函数参数前面添加一个访问限定符来声明
* */
// class Person1 {
//     constructor(readonly name: string) {}
// }
//
// let p1 = new Person1("SD");
// console.log(p1.name);
// console.log(p1);

//7.存取器 支持getters/setters 来截取对对象成员的访问

// class Animal {
//     name: string
// }
//
// let animal = new Animal();
// animal.name = "士大夫顺";
// console.log(animal);

/*
* 需求
* 先检查密码是否正确,然后再允许修改员工的信息
* */
// let passCode: string = '123456'
//
// class Employee {
//     private __fullName: string
//
//     //存取器
//     get fullName(): string {
//         return this.__fullName
//     }
//
//     set fullName(newName) {
//         if (passCode && passCode === "123456") {
//             this.__fullName = newName
//         } else {
//             console.log("密码错误");
//         }
//     }
// }

/*
* 注意
* >=es5
* 如果只实现get默认为只读的
* */
//
// let p1 = new Employee()
// console.log(p1.fullName);
// p1.fullName = "十三点"
// console.log(p1.fullName);

//8.静态属性
/*
* 实例属性:类的实例成员,仅当类被实例化的时候才会被初始化的属性
* 2.我们也可以创建类的静态成员,这些属性存在于类本身上面而不是类的实例上
* */
// class Compony {
// //    静态属性
//     static title = "水电发的"
//
// //    实例属性
//     constructor(public college: string) {
//     }
//
//     fullName() {
//         return Compony.title + ":" + this.college
//     }
// }
//
// let com = new Compony("web学习");
// console.log(Compony.title);
// console.log(com.college);
// console.log(com.fullName());

//9.抽象类
// abstract class Department {
//     name: string
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     printName() {
//         console.log("部门名称" + this.name);
//     }
//
//     abstract printMeeting(): void //必须再每一个继承的派生类中去实现
// }
//
// class Accounting extends Department {
//     constructor() {
//         super('财务部')
//     }
//
//     printMeeting(): void {
//         console.log("每天十点钟开会");
//     }
//
//     payPage(): void {
//         console.log("每天都发工资");
//     }
// }
//
// let department: Department;
// // department=new Department();//不用于实例化 (报错)
//
// department = new Accounting();
// department.printMeeting();
// // department.payPage();//错误 :原因该方法再声明的抽象类中不存在

//10把类当作接口使用

class Point {
    x: number
    y: number
}

interface Print3D extends Point {
    z: number
}

let point3D: Print3D = {x: 10, y: 20, z: 5}




