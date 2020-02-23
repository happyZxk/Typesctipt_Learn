class Greeters {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello,' + this.greeting;
    }
}
var green: Greeters;
let green1 = new Greeters('消息');
console.log(green1.greet());
