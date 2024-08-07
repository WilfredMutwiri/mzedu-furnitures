const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    }
})

const User=mongoose.model('User',userSchema);
module.exports=User