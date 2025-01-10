import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import sendOTP from "../utils/otpManager.js"


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // check empty input fields
        if (!name) {
            return res.status(400).send({
                status: 400,
                message: "Name field is required"
            })
        }
        if (!email) {
            return res.status(400).send({
                status: 400,
                message: "Email field is required"
            })
        }
        if (!password) {
            return res.status(400).send({
                status: 400,
                message: "Password field is required"
            })
        }

        // check password length
        if (password.length < 6) {
            return res.status(400).send({
                status: 400,
                message: "Password must be atleast 6 character"
            })
        }

        // check if the user already exists
        const user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).send({
                status: 400,
                message: "This user already exists"
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
            sendOTP(email)
            await newUser.save()
            res.status(201).send({
                status: 201,
                message: "Account successfully created"
            })
        } else {
            res.status(400).send({
                status: 400,
                message: "Something went wrong, account not created"
            })
        }
    } catch (error) {
        console.error("Error signingup user: ", error.message)
        return res.status(500).send({
            status: 500,
            message: "Error signingup user",
            error: error.message
        })
    }
}

export default signup