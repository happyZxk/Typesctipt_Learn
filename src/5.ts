namespace a {
    abstract class Animal {
        name: string;
        abstract getName(): string;
    }
    class Cat extends Animal {
        name: string;
        getName() {
            return this.name;
        }
    }
    let cat = new Cat();
    cat.name = "猫";
    console.log(cat.name);

    // 描述对象的形状,指的是对象有哪些属性,属性是什么类型
    interface Point {
        x: number;
        z: number
        y: number,
    }
    let point: Point = { x: 0, y: 10, z: 50 };

    // 还可以描述行为的抽象
    interface Speakable {
        speak(): void //因为接口里不能放实现,只能放定义,所有的方法都是抽象的方法
    }

    interface Eatable {
        eat(): void;
    }

    // 类可以实现多个接口,但只能继承一个父类
    class Person implements Speakable, Eatable {
        speak() { }
        eat() { }
    }
    let p = new Person();
    p.eat()
    p.speak()
}

namespace b {
    // 重写 子类重新实现并覆盖父类中的方法
    class Animal {
        constructor() {

        }
        speak() {
            console.log("动物叫");
        }
    }
    class Cat extends Animal {
        speak() {
            console.log("我们以哦个去");
            super.speak()
        }
    }

    class Dog extends Animal {
        speak() {
            console.log("我们一起汪汪汪");
            super.speak()
        }
    }
    let cat = new Cat();
    let dog = new Dog();
    cat.speak()
    dog.speak()
}