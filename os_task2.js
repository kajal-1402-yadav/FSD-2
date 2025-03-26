var os=require('os')
// Write node.js script to create a folder named “AA” at temp folder. Also, create file named “temp1.txt” inside “AA” folder.
//  Now, check if working on 32 bit plateform then print You are working on windows 
// 32 bit else print You are working on windows 64 bit.
var fs=require('fs')
f=os.tmpdir()
console.log(f)
fol=f+'/AA'
// fs.mkdirSync(fol)
fs.writeFileSync(fol+'/temp1.txt','abc')
console.log(os.platform())
if(os.platform()=='win32'){
    fs.writeFileSync(fol+'/temp1.txt','Windows 32 bit')
}
else{
    fs.writeFileSync(fol+'temp1.txt','windows 64 bit')
}

