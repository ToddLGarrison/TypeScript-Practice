interface Stark {
    name: string;
}
//interface is required parameter

const printName = (stark) => {
    console.log(stark.name)
}

printName({name: "Eddard"});
printName({label: "Ralph"})