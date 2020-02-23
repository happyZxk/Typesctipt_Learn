/*
* 不添加修饰符默认的是public
* public
* private 添加改属性后继承的类不能访问
* static 添加这个属性该属性只能通过类名访问
* */
class People {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    print() {
        return this.name + ":" + this.age;
    }
}

class Teacher extends People {
    school: string;

    constructor(school: string) {
        super("郑成功", 55);
        this.school = school;
    }

    print() {
        return this.name + ":" + this.school;
    }
}

let t = new Teacher("张北一种");
console.log(t.print());
