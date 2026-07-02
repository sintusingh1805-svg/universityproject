import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fullname,
            email,
            password: hashedpassword,
            role,
        });

        // remove password in database
        const userData = user.toObject()
        delete userData.password;


        return res.status(201).json({
            success: true,
            message: "user register successfully",
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "please enter valid details",
        })
    }
};