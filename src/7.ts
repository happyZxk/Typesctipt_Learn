// 任意属性
namespace a {
    interface PlainObject {
        [proponame: string]: number
    }
    let obj: PlainObject = {
        x: 1,
        z: 1,
        y: 2
    }
}
namespace b {
    // 接口的继承
    interface Speakable {
        speak(): void;
    }
    interface SpeakChinese extends Speakable {
        SpeakChinese(): void;
    }
    class Person implements SpeakChinese {
        SpeakChinese() {

        }
        speak() {

        }
    }

    // 接口的readonly 
    interface Circle {
        readonly PI: number
        radius: number
    }
    let cicle: Circle = { PI: 3.14, radius: 5 }

    // 接口还可以用来约束函数
    interface Discount {
        (price: number): number
    }
    let cost: Discount = function (price: number): number {
        return price * 0.8;
    }

    console.log(cost(44));

    // 可索引接口
    // 用来对数组和对象进行约束的
    interface UserInterface {
        [index: number]: string
    }
    let arr: UserInterface = ["52", "75"]
}

namespace c {
    interface Speakable {
        name: string
        speak(word: string): void
    }
    class Dog implements Speakable {
        name: string;
        speak(word: string): void {

        }
    }

    class Animal {
        constructor(public name: string) {

        }
    }
    // 约束构造类型 ,使用new 来约束
    interface WithNameClass {
        new(name: string): Animal
    }
    function createAnimal(clazz: WithNameClass, name: string) {
        return new clazz(name)
    }
    createAnimal(Animal, "zxl");
}

