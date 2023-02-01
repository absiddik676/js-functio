var student = {
    name:"rofik",
    roll:545664,
    class: 9,
    marks:95
}
// student.name="karim"
// console.log(Object.values(student));

const propartisName = 'name'
const name= student[propartisName];
console.log(name);

student.name="sofik"
console.log(student)
student['name']='jobber'
console.log(student)
student[propartisName]="kodu"
console.log(student)