var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.tell = function () {
        console.log(Person.name1);
    };
    //
    Person.name1 = "默认值";
    return Person;
}());
var p = new Person();
p.tell();
Person.name1 = "手动";
p.tell();
