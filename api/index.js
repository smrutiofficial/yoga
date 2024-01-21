import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.URI ;

mongoose.connect(uri).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.listen(3000, () => {
    console.log('Server started at on port 3000');
})