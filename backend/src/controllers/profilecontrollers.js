import { User } from "../models/user.model.js";

export const profile=async(req,res)=>{
    try{
        res.status(200).json({
            success:true,
            message:"profile show successfully"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"internal error",
        })
    }
}