// class Parent {
//     constructor(){
//         this.fatherName = "karim mia"
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     getFullName() {
//         return this.name + " " + this.fatherName;
//     }
// }
// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby.getFullName());
// console.log(baby2.getFullName());

class Parent{
    constructor(){
        this.fatherName = "Shawon m. molla"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Saif");
const baby2 = new Child("Afnan");
const baby3 = new Child("Thasim");
console.log(baby.getFullName());
