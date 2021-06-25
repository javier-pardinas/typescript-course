const sum = (value1: number, value2: number):number => {
    return value1 + value2;
}

const printSthV = (): void => {
    console.log(sum(2, 2));
}

const printSthU = (): undefined => {
    console.log(sum(2, 2));
    return undefined;
}

printSthV();
printSthU();