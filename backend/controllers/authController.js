const User=require('../Models/userModel');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const errorHandler = require('../utils/errorHandler');

// strong password regex
const strongPassword=(password)=>{
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
return regex.test(password)
}

// signup
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
        return next(errorHandler(400,"All fields must be filled!"))
    }
    if(!strongPassword(password)){
        return next(errorHandler(400,"Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character."))
    }
    try {
        const existingUser=await User.findOne({userName});
        if(existingUser){
            return next(errorHandler(400,"Username already in use"))
        }
        const existingEmail=await User.findOne({email});
        if(existingEmail){
            return next(errorHandler(400,"Email already exists"))
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

// signin
const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    if(
        !email ||
        !password ||
        email===""||
        password===""
    ){
        return next(errorHandler(400,"All fields must be filled!"))
    }
    try {
        const validUser=await User.findOne({email});
        if(!validUser){
            return next(errorHandler(400,"User not found"))
        }
        // create token
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        // separate password from response
        const {password:pass,...rest}=validUser._doc;
        // create cookie
        res.status(200)
        .cookie('access_token'.token,{
            httpOnly:true
        })
        .json(rest)
        console.log("login successfull!");
    } catch (error) {
        next(error);
    }
}

// signout
const signout=(req,res,next)=>{
    try {
        res.clearCookie('access_token').status(200).json({message:"Signout successful!"})
    } catch (error) {
        next(error)   
    }
}


module.exports={
    signup,
    signin,
    signout
}