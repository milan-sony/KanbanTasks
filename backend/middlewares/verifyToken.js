import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.header("Authorization") // gets the jwt token from header (req.header.authorization)
        if (!token) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized user - no token found"
            })
        }

        // split the bearer token "bearer efhjkhfjkhjkhsjkhsjkhjgkhkjsh"
        const bearer = token.split(' ');
        const bearerToken = bearer[1];

        const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized user"
            })
        }

        const user = await User.findById(decoded.user_id).select("-password")

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "User not found!"
            })
        }

        req.user = user // add a user field with the value of the user from the database to the request
        next() // calling next function
    } catch (error) {
        console.error("Error in verifying JWT token, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Error in verifying JWT token",
            error: error.message
        })
    }
}