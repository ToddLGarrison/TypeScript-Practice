const add = (a: number, b: number): number => {
    return a + b;
}

//returns VOID
const subtract = (a: number, b: number) => {
    a - b;
}

const subtract2 = (a: number, b: number): number => {
    return a - b;
}
function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}


//void means no return from this function
const logger =(message: string ): void => {
    console.log(message);
}

//never means we will never reach end of function
const throwError = (message: string): never =>{
    throw new Error(message);
}

const forecastWeather = {
    date: new Date(),
    weather: 'humid'
}

const logWeather = (forecastWeather: {date: Date, weather: string }): void=>{
    console.log(forecastWeather.date)
    console.log(forecastWeather.weather)
}

//destructure
const logWeather = ({date, weather}: {date: Date, weather: string }): void=>{
    console.log(forecastWeather.date)
    console.log(forecastWeather.weather)
}

logWeather(forecastWeather)