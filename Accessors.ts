class Hello {
    private _name: string;
    tell(): string {
        return this.name;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

var h = new Hello();
h.name = "地方势力对抗";
console.log(h.tell());


