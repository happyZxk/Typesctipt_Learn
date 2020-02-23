// 1.联合类型
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value
//     }
//     if (typeof padding === "string") {
//         return padding + value
//     }
//     throw Error('出现错误');
// }
// console.log(padLeft("些地方", 4));

//
// function padLeft(value: string, padding: string | number) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value
//     }
//     if (typeof padding === "string") {
//         return padding + value
//     }
//     throw Error('出现错误');
// }
//
// console.log(padLeft("些地方", 5));
// console.log(padLeft("些地方", [1, 2, 3]));//编译不通过


//2.类型保护
// interface Bird {
//     fly()
//
//     sleep()
// }
//
// interface Fish {
//     swim()
//
//     sleep()
// }
//
// function getSmallPet(): Fish | Bird {
//
//     return
// }

/*
    let pet = getSmallPet();
    pet.sleep();
    pet.swim();//Error
*/
// let pet = getSmallPet();
// (pet as Fish).sleep();
// (pet as Fish).swim();//Error

//3自定义类型保护
//
// interface Bird {
//     fly()
//
//     sleep()
// }
//
// interface Fish {
//     swim()
//
//     sleep()
// }
//
// function getSmallPet(): Fish | Bird {
//
//     return
// }
//
// //谓词  p is type (p必须来源与pet type 必须来源于 Fish 或 Bird)
// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim() !== undefined;
// }
//
// let pet = getSmallPet();
// if (isFish(pet)) {
//     pet.swim()
// } else {
//     pet.fly()
// }

//instanceof 类型保护

class Bird {
    fly() {
        console.log("鸟在飞");
    }

    sleep() {
        console.log("鸟在睡觉");
    }
}


class Fish {
    swim() {
        console.log("鱼在游");
    }

    sleep() {
        console.log("鱼在睡觉");
    }
}

function getSmallPet(): Fish | Bird {
    return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getSmallPet();
if (pet instanceof Bird) {
    pet.fly()
}

if (pet instanceof Fish) {
    pet.swim()
}

//默认情况下null 和 undefined 可以赋值给任何类型
// --strictNullChecks 该标记可以解决null 和 undefined 自动被包含在一个变量中

let s = "撩课";
s = null;
let s1: string | null = "sdsd";
s1 = undefined
