const express = require("express")
const collection = require("./mango")
const cors = require("cors")
const upp = express()
upp.use(express.json())
upp.use(express.urlencoded({extended:true}))
upp.use(cors())


upp.post("/contact", async(req,res)=>{
    const{name,email,subject}=req.body

    const data={
        name:name,
        email:email,
        subject:subject
    }

    try{
        const check=await collection.findOne({email:email})
         if(check){
            res.json("exist")
         }
         else{
            res.json("notexist")
            await collection.insertMany([data])
         }
    }
    catch(e){
        res.json("fail")
    }
})

upp.listen(8001,()=>{
    console.log("contact connected")
})