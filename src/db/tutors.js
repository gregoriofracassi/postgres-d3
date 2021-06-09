export default (sequelize, DataTypes) => {
  const Tutor = sequelize.define("tutor", {
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
  return Tutor;
};
