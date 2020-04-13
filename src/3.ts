// 如何定义类
namespace a {
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    let p1 = new Person("ZXK", 50)
    console.log(p1.name);
    console.log(p1.age);

}
namespace b {
    // 存取器 getter setter
    class Person {
        private myname: string;
        age: number;
        constructor(name: string, age: number) {
            this.myname = name;
            this.age = age;
        }
        get name() {
            return this.myname;
        }
        set name(newVal: string) {
            this.myname = newVal.toLocaleLowerCase();
        }
    }
    let p1 = new Person("ZXK", 50);
    console.log(p1.name);
}
namespace c {
    // 存取器 getter setter
    class Person {
        constructor(readonly name: string, age: number) {

        }
    }
    let p = new Person("ZXK", 5);
    console.log(p.name);
}
// 继承 ts
/**
 * 子类继承父类后子类就有了父类中的属性和方法
 * 访问修饰符
 * public 自己 自己的子类 和其他类都可以访问
 * protected 受保护的 自己和自己的子类都能访问,其他类不能,new的实例不能访问
 * private  私有的只能自己访问,自己的子类和其它类都不能访问,包括自己new 的实例
 * 
 */
namespace d {
    class Person {
        name: string;
        protected age: number;
        private amount: number;
        constructor(name: string, age: number, amount: number) {
            this.name = name;
            this.age = age;
            this.amount = amount;
        }
        getName() {
            return this.name + this.amount;
        }
        setName(newName: string) {
            this.name = newName;
        }
    }
    class Student extends Person {
        static type = "学生类";
        stuno: number
        constructor(name: string, age: number, amount: number, stuno: number) {
            super(name, age, amount);
            this.stuno = stuno;
        }
        getstuno() {
            // return this.stuno + this.amount;不能
            return this.stuno
        }
        setstuno(newStuno: number) {
            this.stuno = newStuno;
        }
        getType() {
            return Student.type;
        }
    }
    let stu = new Student("ZXK", 20, 2000, 10001)

    console.log(stu.getName())
    console.log(Student.type);
    console.log(stu.getType());
    // console.log(stu.amount);
}
