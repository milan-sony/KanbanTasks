import express from "express";
import { signup, login } from "../controllers/authControllers.js";

const authRoutes = express.Router()

// user signup
authRoutes.post("/signup", signup)

// user login
authRoutes.post("/login", login)

export default authRoutes