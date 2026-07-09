import express from "express";
export const router=express.Router();

import { auth } from "../middlewares/authmiddleware.js";

import { createStudent,getStudent,getStudents,updateStudent,deletestudent } from "../controllers/studentcontroller.js";

router.post("/",auth,createStudent);
router.put("/:id",auth,updateStudent);
router.delete("/:id",auth,deletestudent);

router.get("/",auth,getStudent);
router.get("/:id",auth,getStudents);