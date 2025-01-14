import express from "express";
import { signup, login, verifyOTP } from "../../controllers/userControllers.js";

const userRoutes = express.Router()

// user signup
userRoutes.post("/signup", signup)

// user login
userRoutes.post("/login", login)

// verify OTP
userRoutes.post("/verifyotp", verifyOTP)

// to check whether user authenticated or not (after refresh / made any change)
router.get("/check", verifyToken, checkAuth)

export default userRoutes