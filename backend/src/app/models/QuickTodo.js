module.exports = (sequelize, DataTypes) => {
  const QuickTodo = sequelize.define(
    "QuickTodo",
    {
      quick_todo_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      quick_todo_item: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      tableName: "QuickTodo",
    }
  );
  return QuickTodo;
};
