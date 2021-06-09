export default (sequelize, DataTypes) => {
  const Module = sequelize.define("module", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    starts_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ends_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Module;
};
