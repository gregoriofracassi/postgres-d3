import express from "express"
import models from "../../db/index.js"
const Author = models.Author
const Blog = models.Blog
const Category = models.Category
const Comment = models.Comment
const router = express.Router()

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Blog.findAll({
        include: [
          { model: Category },
          { model: Comment, include: { model: Author } },
          { model: Author },
        ],
      })
      res.send(data)
    } catch (e) {
      console.log(e)
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Blog.create(req.body)
      res.send(data)
    } catch (e) {
      console.log(e)
    }
  })

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Blog.findByPk(req.params.id, {
        include: [
          { model: Category },
          { model: Comment, include: { model: Author } },
          { model: Author },
        ],
      })
      res.send(data)
    } catch (e) {
      console.log(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const row = await Blog.destroy({ where: { id: req.params.id } })
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
      const data = await Blog.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      })
      res.send(data[1][0])
    } catch (e) {
      console.log(e)
    }
  })

export default router
