import s from "sequelize"
import pg from "pg"
const Sequelize = s.Sequelize
const DataTypes = s.DataTypes
import BlogModel from "./blogs.js"
import AuthorModel from "./authors.js"
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
  sequelize: sequelize,
  pool: pool,
}

models.Author.hasMany(models.Blog)
models.Blog.belongsTo(models.Author)

test()

export default models
