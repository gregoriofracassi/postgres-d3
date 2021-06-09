export default (sequelize, DataTypes) => {
  const Student = sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Student;
};
