import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
      },
  },
  { timestamps: true }
);
const usermodel = mongoose.model("usermodel", userSchema);
export default usermodel;
