var fs=require('fs')
data={'detail':[
    {"fname":'abc'},
    {"lname":'pqr'}
]}
obj=JSON.stringify(data)
fs.writeFileSync('user.txt',obj)
var d=fs.readFileSync('user.txt','utf-8')
console.log(JSON.parse(d))
