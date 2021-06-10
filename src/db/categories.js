export default (sequelize, DataTypes) => {
  const Category = sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  })
  return Category
}
