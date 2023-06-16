const express = require("express");
const router = express.Router();
const quickNoteController = require("../app/controllers/QuickTodoController");

router.post("/add-quick-todo", quickNoteController.addTodo);
router.delete("/delete-quick-todo/:quick_todo_id", quickNoteController.deleteQuickTodo);
router.put("/update-quick-todo/:quick_todo_id", quickNoteController.updateQuickTodo);
router.get("/", quickNoteController.getQuickNote);

module.exports = router;
