import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { ApiError } from "../utils/ApiError.js";

export const register = async (req, res, next) => {
  try {
    const { fullname, email, password, role } = req.body;

    if (!fullname || !email || !password || !role) {
      throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
    });

    // Password response me mat bhejo
    const userData = user.toObject();
    delete userData.password;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: userData,
    });
  } catch (error) {
    next(error);
  }
};