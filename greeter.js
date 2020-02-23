var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Yee',
    lastName: 'Huang'
};
var user1 = new User('Yee', 'Huang');
console.log(greeter(user1));
