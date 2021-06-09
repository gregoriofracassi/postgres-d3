import s from "sequelize";
import pg from "pg";
const Sequelize = s.Sequelize;
const DataTypes = s.DataTypes;
import StudentModel from "./students.js";
import ClassModel from "./classes.js";
import ModuleModel from "./modules.js";
import TutorModel from "./tutors.js";
import StudentClass from "./StudentClass.js";
const { PGUSER, PGDATABASE, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
});
const pool = new pg.Pool();
const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const models = {
  Student: StudentModel(sequelize, DataTypes),
  Class: ClassModel(sequelize, DataTypes),
  Module: ModuleModel(sequelize, DataTypes),
  Tutor: TutorModel(sequelize, DataTypes),
  StudentClass: StudentClass(sequelize, DataTypes),
  sequelize: sequelize,
  pool: pool,
};

models.Module.hasMany(models.Class);
models.Class.belongsTo(models.Module);

models.Class.belongsToMany(models.Student, {
  through: { model: models.StudentClass, unique: false, timestamps: false },
});
models.Student.belongsToMany(models.Class, {
  through: { model: models.StudentClass, unique: false, timestamps: false },
});
models.Tutor.hasMany(models.Class);
models.Class.belongsTo(models.Tutor);
test();

export default models;
