import express from "express"
const route = express.Router()

import blogsRoute from "./blogs/index.js"
import authorsRoute from "./authors/index.js"
import commentsRoute from "./comments/index.js"
import categoriesRoute from "./categories/index.js"

route.use("/blogs", blogsRoute)
route.use("/authors", authorsRoute)
route.use("/comments", commentsRoute)
route.use("/categories", categoriesRoute)

export default route
