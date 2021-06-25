var sum = function (value1, value2) { return value1 + value2; };
var printSthV = function () { return console.log(sum(2, 2)); };
var printSthU = function () {
    console.log(sum(2, 2));
    return undefined;
};
var throwError = function (message) {
    throw new Error(message);
};
var sum2;
sum2 = sum;
var sum3;
sum3 = sum;
var printSth = function (a, b, showResult) {
    var result = a + b;
    showResult(result);
};
printSthV();
printSthU();
console.log(sum2(5, 5));
console.log(sum3(15, 5));
printSth(1, 2, function (x) { return console.log(x); });
