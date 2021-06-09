import express from "express";
const route = express.Router();

import studentsRoute from "./students/index.js";
import tutorsRoute from "./tutors/index.js";
import modulesRoute from "./modules/index.js";
import classesRoute from "./classes/index.js";
route.use("/tutors", tutorsRoute);
route.use("/modules", modulesRoute);
route.use("/students", studentsRoute);
route.use("/classes", classesRoute);

export default route;
