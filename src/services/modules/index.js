import express from "express";
import models from "../../db/index.js";
const Module = models.Module;
const Class = models.Class;

const Tutor = models.Tutor;
const Student = models.Student;
const StudentClass = models.StudentClass;
const router = express.Router();
const db = models.pool;
router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const query = `select  sc."classId", sc."studentId", s.name, s.surname, cl.name
      from classes as cl
      inner join public."studentClasses" as sc
      on cl.id=sc."classId"
      inner join students as s
      on sc."studentId"=s.id`;
      const data = await db.query(query);
      // const data = await Module.findAll({
      //   include: {
      //     model: Class,
      //     include: [Tutor, { model: Student, through: { attributes: [] } }],
      //   },
      // });
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Module.create(req.body);
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
