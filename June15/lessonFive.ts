class Person {
    name: string;
    constructor(name:string) {
        this.name = name
    }
    dance() {
        console.log(this.name + " is running")
    }
}

var todd = new Person("Todd")
todd.dance()

class isAwesome extends Person {
    isAwesome(this.name + " is awesome")
}