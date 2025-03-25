// Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. 
// Print sorted array of these 5 elements on Node Js server.


var fs=require('fs')
fs.writeFileSync('task1.txt','0 1 -9 2033 -44 50')
var data=fs.readFileSync('task1.txt','utf-8')
var d=data.split(" ")
console.log(d.sort())
