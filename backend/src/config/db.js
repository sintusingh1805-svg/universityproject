import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("databse connected successfully");
        
    }catch(error){
        throw new ApiError(400 , error.message || "database not connected");
        process.exit(1);
    }
}