"use strict";
// 为什么会有泛型,它的意义在哪里(定义的时候不指定类型,调用的时候给定类型一个宽泛的类型)
var a;
(function (a_1) {
    // 定义函数 类用泛型
    function createArray(length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    console.log(createArray(5, '44'));
    console.log(createArray(5, 2));
    // 类数组 ArrayList arguments
    function sum() {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        var args = arguments;
    }
    sum(1, 2, 3, 4);
    // let root: Element | null = document.getElementById('root');
    // let children: HTMLCollection = root.children;
    // let childNodes: NodeListOf<ChildNode> = root!.childNodes
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.list = [];
        }
        MyArray.prototype.add = function (val) {
            this.list.push(val);
        };
        MyArray.prototype.getMax = function () {
            var result = this.list[0];
            for (var i = 1; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        };
        return MyArray;
    }());
    var arr = new MyArray();
    arr.add(1);
    arr.add(10);
    arr.add(3);
    arr.add(9);
    console.log(arr.getMax());
    var add = function (a, b) {
        return a;
    };
    console.log(add(1, 2));
    // 
    function swap(tulp) {
        return [tulp[1], tulp[0]];
    }
    console.log(swap(["z", "x"]));
    // 默认泛型类型
    function createArray1(length) {
        var t = null;
        return t;
    }
    var result2 = createArray1(52);
    function logger(val) {
        console.log(val.length);
    }
    var cart = {
        list: ["1", "2"]
    };
    var c1 = { list: ["1"] };
    var c2 = ["1", "2"];
    // interface 定义一个实实在在的接口,它是一个真正的类型
    // type一般用来定义别名,
})(a || (a = {}));
