const test1 = function (a, b) {
    return a + b;
};

const test2 = (a, b) => {
    return a + b;
};

const test3 = (a, b) => a + b;

console.log(test1(10, 20));
console.log(test2(2, 5));
console.log(test3(10, 10));