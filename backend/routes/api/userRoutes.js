import express from "express";
import { signup, login, verifyOTP, checkAuth } from "../../controllers/userControllers.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const userRoutes = express.Router()

// user signup
userRoutes.post("/signup", signup)

// user login
userRoutes.post("/login", login)

// verify OTP
userRoutes.post("/verifyotp", verifyOTP)

// to check whether user authenticated or not (after refresh / made any change)
userRoutes.get("/check", verifyToken, checkAuth)

export default userRoutes