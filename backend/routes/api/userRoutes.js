import express from "express";
import signup from "../../controllers/userControllers.js";

const userRoutes = express.Router()

// user signup
userRoutes.post("/signup", signup)


export default userRoutes