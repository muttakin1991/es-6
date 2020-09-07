// class Student{
//     constructor(sId, sName, sRoll){
//         this.id =  sId;
//         this.name = sName;
//         this.roll = sRoll;
//         this.school = "Rahima Khatun";
//     }
// }
// const student1 = new Student(12, "shuvo");
// const student2 = new Student(22, "Mahi");
// console.log(student1, student2);



class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "lohagara high school";
    }
}
const student1 = new Student(12, "afnan");
const student2 = new Student(22, "shawon");
const student3 = new Student(02, "saif");
console.log(student1, student2, student3);
console.log(student3.school);