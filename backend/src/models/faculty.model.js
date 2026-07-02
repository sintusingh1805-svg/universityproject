import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
    },

    experience: {
      type: Number,
      default: 0,
    },

    designation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Faculty = mongoose.model("Faculty", facultySchema);