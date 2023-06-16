module.exports = (sequelize, DataTypes) => {
  const QuickText = sequelize.define(
    "QuickText",
    {
      quicktext_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      item: {
        type: DataTypes.TEXT,
      },
    },
    { sequelize, tableName: "QuickText", timestamps: false }
  );

  return QuickText;
};
