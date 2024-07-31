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