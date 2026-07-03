// Variables
// Objects
// Arrays
// Loop
// if else
let students = [
{
    name:"Naveen",
    id:101,
    mark:85
},
{
    name:"John",
    id:102,
    mark:45
},
{
    name:"Arun",
    id:103,
    mark:25
}
]
// Tasks
// Print all students.
// Print only student names.
// Find student ID 102.
// Print students who passed (mark >=35).
// Count total students.
students.forEach(student => {
    

console.log(`"Students name":${student.name}
    "students id" ${student.id}
    "students.mark" ${student.mark}`)});

   students.map((student) =>{
        console.log(student.name);
    });
    
   let id= students.find((student)=>{
        return student.id=102
        
    })
    console.log(id);
     let mark= students.find((student)=>{
        return student.mark>=35
     })
console.log(mark);

let total = students.reduce((sum, t) => {
    return sum + t.mark;
}, 0);

console.log(total);