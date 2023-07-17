// class Vehicle {
//     drive(): void {
//         console.log('drive me!');
//     }

//     honk(): void {
//         console.log('beep beep!');
//     }
// }


// //Inheritance

// class Car extends Vehicle {
//     drive():void {
//         console.log('vrrroooom!');
//     }
// }



// const carr = new Car()

// carr.drive()
// carr.honk()


// class Vehicle {
//     // public drive(): void {
//     //     console.log('chuggga chugga!');
//     // }

//     public honk(): void {
//         console.log('beep beep!');
//     }
// }

// class Car extends Vehicle {
//     private drive(): void {
//         console.log("vrroooom!");
//     }

//     startDrivingProcess(): void {
//         this.drive();
//     }
// }

// const carr = new Car()

// carr.startDrivingProcess()
// carr.honk()

class Vehicle {
    // public drive(): void {
    //     console.log('chuggga chugga!');
    // }

    // public honk(): void {
    //     console.log('beep beep!');
    // }

    // color: string;

    constructor(public color:string) {
        // this.color = color;
    }

    protected honk(): void {
        console.log('beep beep!');
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)
// vehicle.honk()

class Car extends Vehicle {
    constructor(public wheels: number, color:string) {
        super(color)
    }
    private drive(): void {
        console.log("vrroooom!");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk()
    }
}

const carr = new Car("red")

carr.startDrivingProcess()
// carr.honk()

