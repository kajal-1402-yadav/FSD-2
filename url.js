// var url=require('url')
// addr="https:///localhost:8080/default.html?Name='Kajal'&Age=20#abc"
// data=url.parse(addr,true)
// console.log(data)
// console.log(data.pathname)
// console.log(data.query)
// console.log(data.host)


// var url=require('url')
// addr="https:///localhost:8080/default.html?year=2025&Month_name=March"
// data=url.parse(addr,true)
// console.log(data)
// d=data.query
// if(d.year%4==0){
//     console.log("leap year")
// }
// else{
//     console.log("not a leap year")
// }


// var url=require('url')
// var http=require('http')
// addr="https:///localhost:8080/default.html?year=2025&Month_name=March"
// http.createServer((req,res)=>{
//     data=url.parse(addr,true).query
//     console.log(data)
//     res.write(data.year+" "+data.month)
//     res.end()
// }).listen(5000)


// var url=require('url')
// var http=require('http')
// addr="https:///localhost:5050/default.html?year=2025&Month_name=March"
// http.createServer((req,res)=>{
//     data=url.parse(req.url,true).query
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.write(data.year)
//     res.end()
// }).listen(5050)

//to print query string of url on console as well as on file using es6 callback
var url=require('url')
var fs=require('fs')
addr="https:///localhost:8080/default.html?Name='Kajal'&Age=20#abc"
data=url.parse(addr,true).query
console.log(data)
fs.writeFile('a.txt',JSON.stringify(data),()=>{
    
})
