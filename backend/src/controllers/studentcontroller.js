import { Student } from "../models/student.model.js";
import { ApiError } from "../utils/ApiError.js";

export const createStudent=async (req,res,next)=>{
    try{
        const student=await Student.create(req.body);
        return res.status(201).json({
            success:true,
            message:"student added successfully",
            data: student,
        })
    }catch(error){
         return next(new ApiError(400, error.message || "Something went wrong"));
    }
}

export const getStudents=async(req,res,next)=>{
    try{
        const getstudents=await Student.find("userId email fullname");
        res.status(200).json({
            success:true,
            message:"student details are availabel",
            data: getstudent,
        })
    }catch(error){
        return next(new ApiError(400,error.message || "somenthing went wrong"));
    }
}

export const getStudent=async(req,res,next)=>{
    try{
        const getstudent=await Student.findById(req.params.id);
        if(!getstudent){
            return next(new ApiError(400,error.message || "student not found"));
        }
        return res.status(200).json({
            success:true,
            message:"student data are shown ",
            data:getstudent,
        });
    }catch(error){
        return next(new ApiError(400, error.message || "somenthing went wrong"));
    }
}

export const updateStudent=async(req,res,next)=>{
    try{
        const updatestudent=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true});
        if(!updatestudent){
            return next(new ApiError(404,error.message || "student not found"));
        }
        return res.status(200).json({
            success:true,
            message:"update are succesfully",
            data:updatestudent,
        })
    }catch(error){
        return next(new ApiError(404,error.message || "somenthing went wrong"));
    }
}

export const deletestudent= async (req,res,next)=>{
    try{
        const deletestudent= await Student.findByIdAndDelete(req.params.id);
        if(!deletestudent){
            return next(new ApiError(400,error.message || "student not found"));
        }
        await deletestudent.deleteOne();
        return res.status(200).json({
            success:true,
            message:"student deleted successfully",
            data:deletestudent,
        })
    }catch(error){
        return next(new ApiError(404,error.message || "somenthing went wrong"))
    }
}