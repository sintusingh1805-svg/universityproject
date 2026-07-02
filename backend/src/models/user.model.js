import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "faculty", "admin"],
        default: "student",
    },
},
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);