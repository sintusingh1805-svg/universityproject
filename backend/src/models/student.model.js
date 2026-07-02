import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    enrolmentNo: String,
    department: String,
    semester: Number,
    course: String,
    admissionYear: Number,
    address: String,
    dob: Date,

},
    {
        timestamps: true,
    }
);

export const Student = mongoose.model("Student",studentSchema);