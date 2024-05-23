// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide a email"],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"],
//     },
//     isVerfied: {
//         type: Boolean,
//         default: false,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
// })

// const User = mongoose.models.users || mongoose.model("users", userSchema);

// export default User;
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;