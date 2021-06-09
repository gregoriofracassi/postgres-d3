const ClassesModel = (sequelize, DataTypes) => {
  const Class = sequelize.define("class", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Class;
};

export default ClassesModel;
