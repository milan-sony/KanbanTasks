import nodemailer from "nodemailer"

const mailSender = async (options) => {
    try {
        // Create a Transporter to send emails
        const transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            secure: true, // use SSL
            auth: {
                user: process.env.SMPT_MAIL,
                pass: process.env.SMPT_APP_PASSWORD
            }
        })

        // send emails to the users
        const mail = {
            from: process.env.SMPT_MAIL,
            to: options.to,
            subject: options.subject,
            html: options.message
        }

        console.log("Mail: ", mail)
        await transporter.sendMail(mail)

    } catch (error) {
        console.error("Error sending mail", error)
    }
}

export default mailSender