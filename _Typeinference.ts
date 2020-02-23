// 1 typescript 里在有些没有明确

// 2.最佳通用类型
// let arr = [0, 10, true, null];//推断为(number|boolean)[]
// arr.push(1)
//
//
// class Animal {
//     breed: string
// }
//
// class Dog extends Animal {
// }
//
// class Cat extends Animal {
// }
//
// let zoo = [new Dog(), new Cat()]// 推断为 (Dog|Cat)[]
// let zoo1: Animal[] = [new Dog(), new Cat()]//按照给定的Animal

//3.(上下文类型)
// window.onmousedown = function (mouseEvent) {
//     console.log(mouseEvent.target);//OK
//     console.log(mouseEvent.liaoke);//不OK
// }

//参数类型注解 ,上下文就会被忽略

// window.onmousedown = function (mouseEvent: any) {
//     console.log(mouseEvent.target);//OK
//     console.log(mouseEvent.liaoke);//不OK
// }

//上下文类型会在很多情况下使用
// 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员，数组字面量和返回值语句
//上下文类型也会作为最佳通用类型的候选类型
class Animal {
    breed: string
}

class Dog extends Animal {
}

class Cat extends Animal {
}

function creatZoo(): Animal[] {
    return [new Dog(), new Cat()]
}



