export default (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    read_time_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    read_time_unit: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  })
  return Blog
}
