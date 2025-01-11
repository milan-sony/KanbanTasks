import express from "express";
import { signup, login } from "../../controllers/userControllers.js";

const userRoutes = express.Router()

// user signup
userRoutes.post("/signup", signup)

// user login
userRoutes.post("/login", login)

export default userRoutes