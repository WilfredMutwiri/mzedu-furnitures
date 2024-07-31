const express=require("express");
const dotenv=require('dotenv').config();
const cors=require("cors");
const mongoose=require('mongoose')
const authRoutes=require('./Routes/authRoutes.js')

const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/user',authRoutes)

// connect t db
app.listen(process.env.PORT || 4001, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
});
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to db successfully!")
    })
    .catch((error)=>{
        console.log(error);
    })

// error handling middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})