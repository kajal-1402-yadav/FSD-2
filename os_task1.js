// Write node.js script to create file named “temp.txt”. Now, check if available physical memory of the 
// system is greater than 1 GB then print message “Sufficient Memory” in the file, else print message “Low Memory” in file.
var os=require('os')
var fs=require('fs')

memory=os.freemem()
a=memory/1024/1024/1024
if (a>1){
    fs.writeFileSync('temp.txt','Sufficient Memory')
}
else{
    fs.writeFileSync('temp.txt','Low Memory')
}