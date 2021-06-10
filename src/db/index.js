import s from "sequelize"
import pg from "pg"
const Sequelize = s.Sequelize
const DataTypes = s.DataTypes
import BlogModel from "./blogs.js"
import AuthorModel from "./authors.js"
import CategoryModel from "./categories.js"
import CommentModel from "./comments.js"
const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
})
const pool = new pg.Pool()
const test = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

const models = {
  Blog: BlogModel(sequelize, DataTypes),
  Author: AuthorModel(sequelize, DataTypes),
  Category: CategoryModel(sequelize, DataTypes),
  Comment: CommentModel(sequelize, DataTypes),
  sequelize: sequelize,
  pool: pool,
}

models.Author.hasMany(models.Blog, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
})
models.Blog.belongsTo(models.Author, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
})

models.Author.belongsToMany(models.Blog, {
  through: models.Comment,
  unique: false,
})
models.Blog.belongsToMany(models.Author, {
  through: models.Comment,
  unique: false,
})

models.Category.hasMany(models.Blog)
models.Blog.belongsTo(models.Category)

models.Author.hasMany(models.Comment)
models.Comment.belongsTo(models.Author)

models.Blog.hasMany(models.Comment)
models.Comment.belongsTo(models.Blog)

test()

export default models
