let test = function () {let res = 0; return function(x) {res += x; return res;}};
let sum = test();

console.log(sum(5));