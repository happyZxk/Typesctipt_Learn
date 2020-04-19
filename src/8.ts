// 为什么会有泛型,它的意义在哪里(定义的时候不指定类型,调用的时候给定类型一个宽泛的类型)
namespace a {
    // 定义函数 类用泛型
    function createArray<T>(length: number, value: T): Array<T> {
        let result: Array<any> = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    console.log(createArray<string>(5, '44'));
    console.log(createArray<number>(5, 2));

    // 类数组 ArrayList arguments
    function sum(...args2: any[]) {
        let args: IArguments = arguments;
    }
    sum(1, 2, 3, 4);

    // let root: Element | null = document.getElementById('root');
    // let children: HTMLCollection = root.children;
    // let childNodes: NodeListOf<ChildNode> = root!.childNodes

    class MyArray<T> {
        private list: T[] = [];
        add(val: T) {
            this.list.push(val)
        }
        getMax(): T {
            let result: T = this.list[0];
            for (let i = 1; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        }
    }
    let arr = new MyArray<number>()
    arr.add(1)
    arr.add(10)
    arr.add(3)
    arr.add(9)

    console.log(arr.getMax());
    // 接口泛型
    interface Calculate {
        <T>(a: T, b: T): T
    }
    let add: Calculate = function <T>(a: T, b: T): T {

        return a;
    }
    console.log(add(1, 2));
    // 
    function swap<A, B>(tulp: [A, B]): [B, A] {
        return [tulp[1], tulp[0]]
    }
    console.log(swap(["z", "x"]));

    // 默认泛型类型
    function createArray1<T = number>(length: number): T | null {
        let t: T | null = null;
        return t;
    }
    let result2 = createArray1<boolean>(52)

    // 泛型约束
    interface LengthWise {
        length: number
    }
    function logger<T extends LengthWise>(val: T) {
        console.log(val.length);
    }
    // 
    interface Cart<T> {
        list: T[]
    }
    let cart: Cart<string> = {
        list: ["1", "2"]
    }

    // 泛型类型别名
    type Cart2<T> = { list: T[] } | T[];
    let c1: Cart2<string> = { list: ["1"] };
    let c2: Cart2<string> = ["1", "2"];

    // interface 定义一个实实在在的接口,它是一个真正的类型
    // type一般用来定义别名,
}