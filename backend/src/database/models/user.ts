import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    username: { type: String, default: null },
    email: { type: String, default: null },
    contactNumber: { type: Number, default: 0 },
    countryCode: { type: Number, default: 0 },
    password: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    isBlock: { type: Boolean, default: false },
    authToken: { type: Number, default: 0 },
    otp: { type: Number, default: 0 },
    otpExpireTime: { type: Date, default: null },
    isEmailVerified: { type: Boolean, default: false },
    userType: { type: Number, default: 0, enum: [0, 1] }, // 0 = user || 1 = doctor
    loginType: { type: Number, default: 0, enum: [0, 1, 2, 3] }, // 0 - custom || 1 - google || 2 - facebook
    deviceToken: { type: [{ type: String }], default: [] },
    
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", userSchema);