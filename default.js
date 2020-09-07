// function add (num1, num2){
//     // num2 == undefined;
//     // num2 = 0;
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(15, 17);
// console.log(total);

// function add(num1, num2, num3= 0,){
//     return num1 + num2 + num3;
// }
// const total = add(15, 15,);
// console.log(total);
    

function add(num1, num2 = 20){
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(10);
console.log(total);