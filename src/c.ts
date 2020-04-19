// namespace 第一个作用是封装类似的代码.第二个作用是防止命名冲突
namespace zoo {
    export class Dog {

    }
}
namespace home {
    export class Dog {

    }
}
let dog = new home.Dog();