import express from "express";
import { checkAuth } from "../../controllers/authControllers.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const userRoutes = express.Router()

userRoutes.get("/", verifyToken, checkAuth)

export default userRoutes