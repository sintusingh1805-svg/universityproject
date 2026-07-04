import express from "express";
import {router} from  "./routes/user.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
export const app=express();

app.use(express.json());

app.use("/api", router)

app.use(errorMiddleware);