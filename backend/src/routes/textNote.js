const express = require("express");
const router = express.Router();
const textNoteController = require("../app/controllers/TextNoteController");

router.get("/get-text/:note_id", textNoteController.getTextOfNote)

module.exports = router;
