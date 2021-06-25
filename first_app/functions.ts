const sum = (value1: number, value2: number):number =>  value1 + value2;

const printSthV = (): void => console.log(sum(2, 2));

const printSthU = (): undefined => {
    console.log(sum(2, 2));
    return undefined;
}

const throwError = (message: string):never => {
        throw new Error(message);
}

printSthV();
printSthU();