module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      note_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.TEXT,
        defaultValue: "name",
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "text",
      },
      color: {
        type: DataTypes.STRING,
        defaultValue: "white",
      },
    },
    {
      sequelize,
      tableName: "Note",
      paranoid: true,
      //deletedAt: 'deletedTime' // đổi tên cột deletedAt thành deletedTime
    }
  );
	return Note;
};
