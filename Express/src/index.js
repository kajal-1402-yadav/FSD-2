const express=require("express")
const app=express()

var m=require("./router")
app.use("/",m)
app.listen(8080,(req,res)=>{
    console.log("port 8080")
})

