var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is running");
    };
    return Person;
}());
var todd = new Person("Todd");
todd.dance();
