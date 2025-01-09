import express from "express"
import userRoutes from "./userRoutes.js"

const router = express.Router()

const api = router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "kanban task API V1"
    })
})

// user routes
router.use("/user", userRoutes)

export default api