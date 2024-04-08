import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors';
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
}
);

const app=express();
app.use(express.json());
app.use(cors());


app.listen(5000,()=>{
    console.log('Server is running on port 5000!!');
}
);

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((req,res,next)=>{
   const statusCode=err.statusCode || 500;
   const message=err.message || 'Internal Server Error';
   return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
   });
}
);