const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/contactdb")
.then(()=>{
    console.log("contactbd connected")
})
.catch(()=>{
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection