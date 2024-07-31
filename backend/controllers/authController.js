const User=require('../Models/userModel');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');

const strongPassword=(password)=>{
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
return regex.test(password)
}

const signup=async(req,res,next)=>{
    const {userName,email,password}=req.body;
    if(
        !userName ||
        !password ||
        !email ||
        userName ===""||
        password ===""||
        email=== ""
    ){
        console.log("All fields must be filled");
    }
    if(!strongPassword(password)){
        console.log("Enter a strong password");
    }
    try {
        const existingUser=await User.findOne({userName});
        if(existingUser){
            console.log("UserName already in use");
        }
        const existingEmail=await User.findOne({email});
        if(existingEmail){
            console.log("Email already in use");
        }
        const hashPassword=bcryptjs.hashSync(password,10);
        const newUser=new User({
            userName,
            email,
            password:hashPassword
        });
        await newUser.save()
        res.status(200).json({message:"Account created successfully!"})
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    signup
}