import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    username: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      lowercase: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    avatar: {
      type: String,
      default: ""
    },

    bio: {
      type: String,
      default: "",
      trim: true,
      maxlength: 160
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    isVerified: {
      type: Boolean,
      default: false
    },

    refreshToken: {
      type: String,
      default: "",
      select: false
    }
  },
  {
    timestamps: true
  }
);

export default userSchema;