const student = [
    {id: 21, name: 'omor sunny'},
    {id: 31, name: 'manna'},
    {id: 41, name:'moyouri'},
    {id: 71, name: 'deepjol'}
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s =>  s.id > 40);
const biggerOne = student.find(s =>  s.id > 40);
console.log(biggerOne);