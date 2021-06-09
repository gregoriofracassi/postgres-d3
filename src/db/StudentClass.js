const StudentClass = (sequelize, DataTypes) => {
  const StudentClass = sequelize.define("studentClass", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  return StudentClass;
};

export default StudentClass;
