import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new ApiError(400, "Email and password are required");
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(400, "Invalid email or password");
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new ApiError(400, "Invalid email or password");
        }
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET, {
            expiresIn: "7d",
        }
        )
        return res.status(200).json({
            success: true,
            message: "user login successfully",
            token,
        })
    } catch (error) {
        next(error);
    }
} 