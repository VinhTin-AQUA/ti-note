module.exports = (sequelize, DataTypes) => {
  const TextNote = sequelize.define(
    "TextNote",
    {
      text_note_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      text_data: {
        type: DataTypes.TEXT,
        defaultValue: "",
      },
    },
    {
      sequelize,
      tableName: "TextNote",
    }
  );

  return TextNote;
};
