const note = require("./note");
const niceSaying = require("./niceSaying");
const quickTodo = require("./quickTodo");
const quickText = require("./quickText");
const textNote = require("./textNote");
const todo = require("./todo");

function route(app) {
  app.use("/notes", note);

  app.use("/saying", niceSaying);
  app.use("/quick-todos", quickTodo);
  app.use("/quick-text", quickText);
  app.use("/text-note", textNote);
  app.use("/todo", todo);

  //app.use("/content", textNote);
  //app.use("/todo", todo);
  //app.use("/quick-note", quickNote);
}

module.exports = route;
