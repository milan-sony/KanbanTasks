import express from "express";
import { signup, login, verifyOTP } from "../../controllers/userControllers.js";

const userRoutes = express.Router()

// user signup
userRoutes.post("/signup", signup)

// user login
userRoutes.post("/login", login)

// verify OTP
userRoutes.post("/verifyOTP", verifyOTP)

export default userRoutes