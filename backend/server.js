const express = require("express")

// config .env
require("dotenv").config()

// creates an express app
const app = express()

// Base URL
app.use("/", (req, res) => {
    res.json("This is the express server")
})

app.listen((process.env.PORT || 5000), () => {
    console.log(`\nServer listening on port: ${process.env.PORT || 5000}`)
})