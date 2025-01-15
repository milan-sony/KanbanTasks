import express from "express"
import dotenv from "dotenv"
import routes from "./routes/index.js"
import connectDB from "./configs/db.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"

// config .env
dotenv.config()

// creates an express app
const app = express()

// connect with DB
connectDB()

// cors
app.use(cors({
    origin: "http://localhost:5173", // the server can be really strict, and specify that only one origin can access it
    credentials: true // allows to send cookies and authorization headers with the request
}))

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// cookie parser
app.use(cookieParser())

// base URL
app.use("/", routes)

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`)
})