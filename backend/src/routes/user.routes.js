import express from "express";
import  Router  from "express";
import registercontrollers from "../src/controllers/registercontrollers.js";
import logincontrollers from "../src/controllers/logincontrollers.js";
import profilecontrollers from "../src/controllers/profilecontrollers.js";

export const router=express.Router();


router.post("/register",registercontrollers);
router.post("/login",logincontrollers);
router.post("/profile",profilecontrollers);
