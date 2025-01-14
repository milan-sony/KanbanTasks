import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookie.jwt // gets the jwt token from cookie (parse cookie)
        if (!token) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized user"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized user"
            })
        }

        const user = await User.findById(decoded.useId).select("-password")

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