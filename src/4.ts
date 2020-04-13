namespace a {
    interface Person {
        xx: string;
        yy: string;
    }
    function enhancer(target: any) {
        target.prototype.xx = 'xx';
        target.prototype.yy = 'yy';

    }

    @enhancer
    class Person {
        constructor() { }
    }
    let p = new Person();
    console.log(p.xx);
    console.log(p.yy);
}
// 把类整个替换
namespace b {
    interface Person {
    }
    // target 是类的定义 
    function enhancer(target: any) {
        console.log("target", target);

        target.prototype.name = "zxl"
        target.prototype.age = 20;
    }
    @enhancer
    class Person {
        name: string;
        age: number;
    }

    let p = new Person();
    console.log(p.age);
    console.log(p.name);
}
// 属性装饰器
namespace c {
    // target 如果装饰的是一个普通属性的话,这个target指向类的原型(Person.prototype)
    // target 如果装饰的是一个static,这个target指定类的定义

    function upperCase(target: any, propertyName: string) {
        let value = target[propertyName];
        const getter = () => value;
        const setter = (newVal: string) => {
            value = newVal.toUpperCase();
        }
        delete target[propertyName];
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }

    function prototynoEnumerable(flag: boolean) {
        return function (target: any, methodName: string) {

        }
    }
    function methodnoEnumerable(flag: boolean) {
        return function (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
            propertyDescriptor.enumerable = flag;
        }
    }
    function setAge(age: number) {
        return function (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
            target.age = age;
        }
    }
    function toNumber(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
        let oldMethod = propertyDescriptor.value;
        propertyDescriptor.value = function (...args: any[]) {
            args = args.map(item => parseFloat(item));
            return oldMethod.apply(this, args);
        }
    }
    class Person {
        static age: number;
        @upperCase
        @prototynoEnumerable(false)
        name: string = 'zxl'
        @methodnoEnumerable(false)
        getName() {
            console.log("getName");
        }
        @setAge(100)
        static getAge() {

        }
        @toNumber
        sum(...arg: any[]) {
            return arg.reduce((accu, item) => accu + item, 0)
        }
    }
    let p = new Person();
    p.name = "jiagou"
    console.log(p.name);
    console.log(Person.age);
    for (const key in p) {
        console.log("key", key);
    }

    console.log(p.sum(1, '2', '3'));

}
namespace d {
    interface Person {
        age: number
    }
    // 参数装饰器 方法参数
    /**
     * target 类的原型
     * methodName 方法名
     * paramsIndex 参数索引
     *
     * */

    function addAge(target: any, methodName: string, paramsIndex: number) {
        console.log(target, methodName, paramsIndex);
        target.age = 10;
    }
    class Person {
        login(username: string, @addAge password: string) {
            console.log(this.age, username, password);

        }
    }
    let p = new Person();
    p.login('zxk', "8965")
}
// 装饰器执行顺序
// 属性方法装饰器最新执行(他们两个的顺序是谁先谁先执行)
// 方法装饰器有参数装饰器时先参数在方法
// 类装饰器最后执行(有多个的情况,采用就近原则谁距离类近谁先执行)
