import express from "express";
export const studentroutes=express.Router();

import { auth } from "../middlewares/authmiddleware.js";

import { createStudent,getStudent,getStudents,updateStudent,deletestudent } from "../controllers/studentcontroller.js";
studentroutes.post("/",auth,createStudent);
studentroutes.put("/:id",auth,updateStudent);
studentroutes.delete("/:id",auth,deletestudent);

studentroutes.get("/",auth,getStudent);
studentroutes.get("/:id",auth,getStudents);

