// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function (num){
//     return num * 2;
// }

// const doubleIt = num => num * 2;

// const add = (x, y) => x + y;
// const give5 = () => 5;
// const doMath = (x, y) => {
//     const sum = x + y;
//     const diff = x - y;
//     const result = sum * diff
//     return result;
// }

// const result = add(50, 70);
// const result3 = doMath(7, 5);
// console.log(result3);

// const doubleIt = num => num *2;

// const add = (x, y) => x + y;
// const faka = () => 5;

// const doMath = (x, y = 8) => {
//     const sum = x + y;
//     const diff = x - y;
//     const result = sum * diff;
//     return result;
// }
// const total = doMath(10, 7);
// console.log(total);

var myMath = (a, b, c = 5) => {
    var jog = a + b;
    var biyog = b - c;
    var result = a * c;
     return result; 
}
var total = myMath(5, 4);
console.log(total);