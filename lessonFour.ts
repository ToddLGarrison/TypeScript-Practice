class Stark {
    name: string;
    static castle : String = "Winterfell"
    saying: string;
}

constructor(){
    this.saying = "Winterfell"
}

hello(person : string){
    console.log("Hello " + person)
}

var ned = new Stark();
ned.saying = "Winter is coming"