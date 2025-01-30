import cryptoRandomString from "crypto-random-string"
import Otp from "../models/otpModel.js"
import mailSender from "./mailSender.js"

// generate OTP
function generateOTP() {
    return cryptoRandomString({
        length: 6,
        type: "numeric"
    })
}

// send otp via email
const sendOTP = async (email) => {
    try {
        const OTP = generateOTP()
        console.log("\n✔️  OTP generated")
        const newOTP = new Otp({
            email: email,
            otp: OTP
        })
        if (!newOTP) {
            return console.log("Something went wrong, OTP not generated")
        }
        console.log("newOTP: ", newOTP)
        await newOTP.save()
        console.log("OTP saved to DB")

        // send OTP via email
        await mailSender({
            to: email,
            subject: "📢 Verify account - KanbanTasks",
            message: `<p>Your OTP to verify KanbanTasks account is: <strong>${OTP}</strong></p>`
        })
        console.log(`\n✔️  OTP sent successfully to ${email}`)
    } catch (error) {
        console.error("An error occured at sending OTP via mail: ", error.message)
    }
}

export default sendOTP

