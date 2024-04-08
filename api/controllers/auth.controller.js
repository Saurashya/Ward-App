import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup= async (req, res,next) => {
const{username,email,password}=req.body;
const newUser = new User({username,email,password});
try{
    await newUser.save();
    res.status(201).json("User created successfully!")
}catch(error){
  res.status(500).json(error.message);
}
}

export const signin= async (req, res,next) => {
const{email,password}=req.body;
try{
    const user = await User.findOne({email});
    if(!user){
        throw errorHandler(404,"User not found!");
    }
    if(user.password !== password){
        throw errorHandler(400,"Invalid credentials!");
    }
    res.status(200).json("User logged in successfully!");
    console.log(user+"logged in successfully!");
}
catch(error){
    res.status(500).json(error.message);
}
}
