const dbConfig = require("../../config/dbConfig");
const { DataTypes, Sequelize, Op } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const Note = require("./Note")(sequelize, DataTypes);
const TextNote = require("./TextNote")(sequelize, DataTypes);
const Todo = require("./Todo")(sequelize, DataTypes);
const QuickText = require("./QuickText")(sequelize, DataTypes);
const QuickTodo =  require("./QuickTodo")(sequelize, DataTypes);
const NiceSaying = require("./NiceSaying")(sequelize, DataTypes);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

Todo.belongsTo(Note, { foreignKey: "note_id" }); // Một Todo thuộc về một Note
Note.hasMany(Todo, { foreignKey: "note_id" }); // Một Note có nhiều Todo

TextNote.belongsTo(Note, { foreignKey: "note_id" }); // Một Content thuộc về một Note
Note.hasOne(TextNote, { foreignKey: "note_id" }); // Một Note có một Content

db.note = Note;
db.textNote = TextNote;
db.todo = Todo;
db.quickText = QuickText;
db.quickTodo = QuickTodo;
db.niceSaying = NiceSaying;

db.sequelize.sync({ force: false });
//db.sequelize.sync({ alter: true });

module.exports = db;
