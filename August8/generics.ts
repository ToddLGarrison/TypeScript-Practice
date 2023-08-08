class ArrayOfNumbers {
    constructor(public collection: number[]){}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]){}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]){}

    get(index: number): T {
        return this.collection[index];
    }
}

function printStrings(array: string[]):void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function printnumbers(array: number[]):void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function printAnything<T>(array: T[]):void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}