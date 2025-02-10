import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import sendOTP from "../utils/otpManager.js"
import generateToken from "../utils/generateTokens.js"
import Otp from "../models/otpModel.js"

// user signup
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // check empty input fields
        if (!name) {
            return res.status(400).json({
                status: 400,
                message: "Name field is required"
            })
        }
        if (!email) {
            return res.status(400).json({
                status: 400,
                message: "Email field is required"
            })
        }
        if (!password) {
            return res.status(400).json({
                status: 400,
                message: "Password field is required"
            })
        }

        // check password length
        if (password.length < 6) {
            return res.status(400).json({
                status: 400,
                message: "Password must be atleast 6 character"
            })
        }

        // check if the user already exists
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "A user with this email already exists"
            })
        }

        // if user not found hash the password save user data to db and send verification email to the user
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        })

        if (newUser) {
            // send OTP
            // await sendOTP(email)

            // generate token
            generateToken(newUser._id, res)
            await newUser.save()
            return res.status(201).json({
                status: 201,
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                message: "Account successfully created"
            })
        } else {
            res.status(400).json({
                status: 400,
                message: "Something went wrong, account not created"
            })
        }
    } catch (error) {
        console.error("Error signing up user, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Error signing up user",
            error: error.message
        })
    }
}

// user login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // check whether the user exists in the DB
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "Invalid credentials"
            })
        }

        // check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({
                status: 400,
                message: "Invalid credentials"
            })
        }

        // generate token for user login
        generateToken(user._id, res)
        res.status(200).json({
            status: 200,
            _id: user._id,
            name: user.name,
            email: user.email,
            message: "Login successfull"
        })

    } catch (error) {
        console.error("Error loging in user, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Error loging in user",
            error: error.message
        })
    }
}

// verify user OTP
export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body
        console.log("mail:", email)
        console.log("otp: ", otp)
        // find if the otp exists with the email provided
        const existingOTP = await Otp.findOneAndDelete({ email: email, otp: otp })
        console.log("Existing otp", existingOTP)
        if (existingOTP) {
            console.log("OTP deleted from DB")
            await User.updateOne({ email: email }, { $set: { isEmailAuthenticated: true } }) // update the value of isEmailAuthenticated field in the user model to true
            console.log("User table updated")
            return res.status(200).json({
                status: 200,
                message: "OTP verified successfully",
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "Invalid OTP"
            })
        }
    } catch (error) {
        console.error("Error verifying OTP, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Error verifying OTP",
            error: error.message
        })
    }
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.error("Error in checking user authentication, ", error.message)
        return res.status(500).json({
            status: 500,
            message: "Error in checking user authentication",
            error: error.message
        })
    }
}