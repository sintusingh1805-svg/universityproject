import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const auth =(req,res,next)=>{

   try{
	const token= req.headers("authorization");
	if(!token){
	return res.status(400).json({
	success:false,
	message:"token invalid",
	});
	}
	const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    const jwtToken = token.startsWith("Bearer ")
      ? token.slice(7)
      : token;

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;

    next();	

}
    
    catch(error){
    return res.status(500).json({
       success:false,
       message:"invalid expire token",
});
};
}
