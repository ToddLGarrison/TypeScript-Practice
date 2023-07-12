const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camero']
]

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values

carMakers.push(200);

//Help with 'map'

carMakers.map((car: string): string => {
    return car
});