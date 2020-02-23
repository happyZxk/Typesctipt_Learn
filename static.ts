class Person {
    //
    static name1: string = "默认值";

    tell() {
        console.log(Person.name1);
    }
}

let p = new Person();
p.tell()
Person.name1 = "手动";
p.tell()
