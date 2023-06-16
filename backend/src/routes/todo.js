const express = require("express");
const router = express.Router();
const todoController = require("../app/controllers/TodoController");

router.get("/get-todos/:note_id", todoController.getTodos);
router.post("/save-todo", todoController.saveTodo);
router.post("/add-todo", todoController.addTodo);
router.delete("/remove-todo/:todo_id", todoController.removeTodo);

router.put("/update-todo/:todo_id",todoController.updateTodo);

module.exports = router;
