
namespace a {
    interface Bird {
        name: string;
        fly(): void;
    }

    interface Person {
        name: string;
        eat(): void
    }

    type BirdMan = Bird & Person;
    let p: BirdMan = {
        name: "zxl",
        fly() {

        },
        eat() {

        }
    }
}

// typeof 可以获取一个变量的类型
namespace b {
    // type Person{
    //     name: string;
    //     age: number
    // }
    let p = {
        name: "zxcl",
        age: 10
    }

    // type 用来定义类型的,let var 只能定义值
    type Person = typeof p;

    let p2: Person = {
        name: "zxp2",
        age: 55
    }
    // 索引访问操作符我们可以通过一个[]获取类型的子类型
    interface Person2 {
        name: string;
        age: number;
        job: {
            name: string
        };
        interests: { name: string, age: number }[]//定义一个数组每一项内容为一个对象
    }

    let myname: Person2["job"]['name'] = "sdfhsfj";
    let myage: Person2['interests'][0]["age"] = 45;


    // keyof 索引类型查询操作符
    interface Person3 {
        name: string;
        age: number;
        gender: "male" | "femate";
    }

    // type person3keys = "name" | "age" | "gender"
    type person3keys = keyof Person3;//返回一个接口它的key的集合
    function getValueByKey(val: Person3, key: person3keys): any {
        return val[key];
    }
    let person3: Person3 = {
        name: "ZXL",
        age: 52,
        gender: "femate"
    }
    getValueByKey(person3, "name")

    // 映射类型在定义的时候可以通过in 操作符去批量定义

    interface Person4 {
        name: string;
        age: number;
        gender: "male" | "femate";
    }
    // type PartilePerson = {
    //     [key in keyof Person4]?: Person4[key]

    // }

    // type Partial<T> = {
    //     [key in keyof T]?: T[key]
    // }
    type PartilePerson = Partial<Person4>
    let person4: Person4 = {
        name: "ZLX",
        age: 5,
        gender: 'femate'
    }
    let person4s: PartilePerson = {
        name: "sdfs"
    }

    // Required的实现原理
    type Required<T> = {
        [key in keyof T]-?: T[key]
    }
    type Requiredperson4 = Required<Person4>//将选填的属性变为必填
    let p4: Requiredperson4 = {
        name: "ZLX",
        age: 5,
        gender: 'femate'
    }

    type Readonly<T> = {
        readonly [key in keyof T]: T[key]
    }
    type Readonlyperson = Readonly<Person4>
    let p6: Readonlyperson = {
        name: "ZLX",
        age: 5,
        gender: 'femate'
    }


    type Pick<T, K extends keyof T> = {
        [key in K]: T[key]
    }

    type PickPerson4 = Pick<Person4, "name" | 'age'>
    let x: PickPerson4 = {
        name: "sdf",
        age: 444
    }

}
