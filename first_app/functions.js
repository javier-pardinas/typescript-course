var sum = function (value1, value2) {
    return value1 + value2;
};
var printSthV = function () {
    console.log(sum(2, 2));
};
var printSthU = function () {
    console.log(sum(2, 2));
    return undefined;
};
printSthV();
printSthU();
