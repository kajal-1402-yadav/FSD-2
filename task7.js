// Write a JS to store an array of objects having name and age. display name and age of person with highest age.
const person =
[
{
name: "PQR", age:78
},
{
name: "ABC", age: 35
},
{
name: "XYZ", age: 47
}
]

function fun(person){
    // return person.sort((a,b)=>b.age-a.age)[0]
    return person.sort((a,b)=>a.name.localeCompare(b.name))[0]
    
}
console.log(fun(person))
