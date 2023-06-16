const express = require("express");
const router = express.Router();

const noteController = require("../app/controllers/NoteController");

router.post("/save-text-note", noteController.saveTextNote);
router.post("/save-todo-note", noteController.saveTodoNote);
router.post("/restore/:note_id", noteController.restoreNote);

router.put("/update-text-note/:note_id", noteController.updateTextNote);
router.put("/update-note-name/:note_id", noteController.updateNoteName);

router.delete("/delete-note/:note_id", noteController.deleteNote);
router.delete(
  "/permanently-delete-note/:note_id",
  noteController.permanentlyDeleted
);

router.get("/recyle-bin", noteController.recycleBin);
router.get("/text-notes", noteController.getTextNotes);
router.get("/todos", noteController.getNoteTodos);
router.get("/", noteController.getNotes);

module.exports = router;
