import express from "express";
import  Router  from "express";
import {register} from "../controllers/registercontrollers.js";
import {login} from "../controllers/logincontrollers.js";
import {profile} from "../controllers/profilecontrollers.js";

export const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/profile",profile);
