let test = function () {
    let res = 0;
    return function (x = 0) {
        res += x;
        return res;
    }
};
let sum = test(0);

console.log(sum(0));
console.log(sum(5));
console.log(sum(10));