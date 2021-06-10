import express from "express"
import models from "../../db/index.js"
const Category = models.Category
const router = express.Router()

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Category.findAll()
      res.send(data)
    } catch (e) {
      console.log(e)
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Category.create(req.body)
      res.send(data)
    } catch (e) {
      console.log(e)
    }
  })

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Category.findByPk(req.params.id)
      res.send(data)
    } catch (e) {
      console.log(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const row = await Category.destroy({ where: { id: req.params.id } })
      if (row > 0) {
        res.send("ok")
      } else {
        res.status(404).send("Not found")
      }
    } catch (e) {
      console.log(e)
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Category.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      })
      res.send(data[1][0])
    } catch (e) {
      console.log(e)
    }
  })

export default router
