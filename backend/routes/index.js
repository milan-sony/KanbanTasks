import express from "express"

const router = express.Router()

const routes = router.use("/api", (req, res)=>{
    res.status(200).json({
        status: 200,
        message: "API works properly"
    })
})

export default routes;