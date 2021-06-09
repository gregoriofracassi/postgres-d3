import express from "express"
const route = express.Router()

import blogsRoute from "./blogs/index.js"
import authorsRoute from "./authors/index.js"

route.use("/blogs", blogsRoute)
route.use("/authors", authorsRoute)

export default route
