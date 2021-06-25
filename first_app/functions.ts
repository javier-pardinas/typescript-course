const sum = (value1: number, value2: number):number =>  value1 + value2;

const printSthV = (): void => console.log(sum(2, 2));

const printSthU = (): undefined => {
    console.log(sum(2, 2));
    return undefined;
}

const throwError = (message: string):never => {
        throw new Error(message);
}

let sum2: Function;
sum2 = sum;
let sum3: (a: number, b: number) => number;
sum3 = sum;

const printSth = (a: number, b:number, showResult: (value: number)=>void): void => {
    let result = a+b;
    showResult(result);
}

printSthV();
printSthU();

console.log(sum2(5, 5));
console.log(sum3(15, 5));

printSth(1, 2, x => console.log(x))