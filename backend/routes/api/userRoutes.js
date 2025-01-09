import express from "express";
import userSignup from "../../controllers/userControllers.js";

const userRoutes = express.Router()

// user signup
userRoutes.get("/signup", userSignup)


export default userRoutes