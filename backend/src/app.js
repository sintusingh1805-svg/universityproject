import express from "express";
import {router} from  "./routes/user.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { router } from "./routes/student.routes.js";
export const app=express();

app.use(express.json());

app.use("/api", router)
app.use("/api/students",router)

app.use(errorMiddleware);