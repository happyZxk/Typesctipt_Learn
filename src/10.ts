namespace a {
    // 类型保护, 就是更精确的知道是哪种类型
    function double(input: string | number | boolean) {
        if (typeof input === "string") {
            input.toLocaleUpperCase();
        } else if (typeof input === "number") {
            input.toFixed(2);
        } else {
            input
        }
    }

    class Animal {
        public name: string = 'zxl'
    }

    class Bird extends Animal {
        public swing: number = 2;
    }

    function getName(a: Animal) {
        if (a instanceof Bird) {

        } else {
            a.name
        }
    }
    // null 保护
    function getFirstLetter(s: string | null) {
        if (s === null) {
            s = ""
        }
        function ensure() {
            s = s || "";
        }
        ensure();
        return s.charAt(0);
    }
    let aa = { b: 1 }
    console.log(aa?.b);


    interface WarningButton {
        class: "warning",
        text1: "删除"
    }
    interface DangerButton {
        class: "danger",
        text2: "删除"
    }
    type Button = WarningButton | DangerButton;
    function getButton(button: Button) {
        if (button.class === "warning") {
            button.text1
        } else {
            button.text2
        }
    }


}
namespace b {
    interface Bird {
        name1: string
        legs: number
    }
    interface Dog {
        name2: string
        legs: number
    }

    function isBird(x: Bird | Dog): x is Bird {
        return x.legs === 2
    }
    function getNumber(x: Bird | Dog) {
        if (isBird(x)) {
            console.log(x.name1);

        } else {
            console.log(x.name2);
        }
    }
    let x: Bird = { name1: "鸟", legs: 2 }
    getNumber(x)
}