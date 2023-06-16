module.exports = (sequelize, DataTypes) => {
  const NiceSaying = sequelize.define(
    "NiceSaying",
    {
      saying_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      saying_item: {
        type: DataTypes.TEXT,
      },
      linkImg: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "NiceSaying",
    }
  );
  return NiceSaying;
};
