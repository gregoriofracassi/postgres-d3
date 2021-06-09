import express from "express";
import models from "../../db/index.js";
const Class = models.Class;
const Module = models.Module;
const Tutor = models.Tutor;
const Student = models.Student;
const StudentClass = models.StudentClass;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Class.findAll({
        include: [
          { model: Module },
          Tutor,
          { model: Student, through: { attributes: [] } },
        ],
      });
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Class.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router.route("/:classId/addStudent/:studentId").post(async (req, res, next) => {
  try {
    const data = await StudentClass.create({
      classId: req.params.classId,
      studentId: req.params.studentId,
    });
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  });

export default router;
