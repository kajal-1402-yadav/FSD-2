// Write a script to define two JSON objects named as “division1” and “division2” having an array to
//  store names of students. These name should be sorted alphabetically in the object and should be be 
// written to the file. At last, both division objects should be visible with names sorted alphabetically in file.

var test = { "division1": {
"name":["Z","B","H"]
},
"division2": {
"name" :["Y","A","G"]
}
}
function fun(){
    let ob=test.division1.name.concat(test.division2.name)
    return ob.sort((a,b)=>a.localeCompare(b))
}
console.log(fun())