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

        // check password length (<6)
    } catch (error) {

    }
}

export default signup