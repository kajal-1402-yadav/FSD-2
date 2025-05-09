const express=require("express")
var router=express.Router()
var mui=[
    {id:101,name:"Iron-Man",rating:9,release:2019},
    {id:102,name:"Captain-America",rating:8,release:2018}
]

router.get("/",(req,res)=>{
    res.json(mui)
})

router.get("/:id",(req,res)=>{
    var cm=mui.filter((b)=>{
        if(b.id==req.params.id){
            return true
        }
    })
    if(cm.length==1){
        res.json(cm[0])
    }
    else{
        res.send("not found")
    }
})

router.get("/name/:name",(req,res)=>{
    var cm=mui.filter((b)=>{
        if(b.name==req.params.name){
            return true
        }
    })
    if(cm.length==1){
        res.json(cm[0])
    }
    else{
        res.send("not found")
    }
})
module.exports=router
