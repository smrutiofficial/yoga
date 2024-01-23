import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.URI ;

mongoose.connect(uri).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
    console.log('Server started at on port 3000');
})

// routers
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode ||500;
    const message=err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode,
    })
})