class Student{
    constructor(sId, sName, sRoll){
        this.id =  sId;
        this.name = sName;
        this.roll = sRoll;
        this.school = "Rahima Khatun";
    }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "Mahi");
console.log(student1, student2);