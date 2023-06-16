
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      todo_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
			item: {
				type: DataTypes.TEXT,
			},
			completed: {
				type: DataTypes.BOOLEAN
			},
      deadline: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      tableName: "Todo",
    }
  );
  return Todo;
};
