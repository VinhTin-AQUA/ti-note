const db = require("../models/index");

const Note = db.note;
const TextNote = db.textNote;
const Todo = db.todo;
const Op = db.Op;

class NoteController {
  // [get] /notes
  async getNotes(req, res, next) {
    try {
      const notes = await Note.findAll({
        order: [["updatedAt", "DESC"]],
        raw: true,
      });
      res.send(notes);
    } catch (error) {
      console.log(error);
    }
  }

  // [get] /notes/text-note
  async getTextNotes(req, res, next) {
    try {
      const notes = await Note.findAll({
        order: [["updatedAt", "DESC"]],
        raw: true,
        where: {
          type: "text",
        },
      });
      res.send(notes);
    } catch (error) {
      console.log(error);
    }
  }

  async getNoteTodos(req, res, next) {
    try {
      const notes = await Note.findAll({
        order: [["updatedAt", "DESC"]],
        raw: true,
        where: {
          type: "todo",
        },
      });
      res.send(notes);
    } catch (error) {
      console.log(error);
    }
  }

  // [POST] /notes/saveTextNote
  async saveTextNote(req, res, next) {
    try {
      const noteData = {
        name: req.body.name,
        type: "text",
        color: "#60a5fa",
      };
      const newNote = await Note.create(noteData);

      const textOfNote = {
        text_data: req.body.text_data,
        note_id: newNote.note_id,
      };
      const text = await TextNote.create(textOfNote);

      res.send(newNote);
    } catch (error) {
      console.log(error);
    }
  }

  async updateTextNote(req, res, next) {
    try {
      const note_id = req.params.note_id;
      const note = {
        name: req.body.name,
      };
      const text = {
        text_data: req.body.text_data,
      };

      await Note.update(note, { where: { note_id: note_id } });
      await TextNote.update(text, { where: { note_id: note_id } });
      res.send(note_id);
    } catch (error) {
      console.log(error);
    }
  }

  // [post] /notes/save-todo-note
  async saveTodoNote(req, res, next) {
    try {
      const noteData = {
        name: req.body.name,
        type: "todo",
        color: "#16a34a",
      };
      const newNote = await Note.create(noteData);
      res.send(newNote);
    } catch (error) {
      log(error);
    }
  }

  // [post] /notes/update-note-name/:note_id
  async updateNoteName(req, res, next) {
    try {
      const note_id = req.params.note_id;
      const noteData = {
        name: req.body.name,
        type: "todo",
        color: "#16a34a",
      };
      const updateNote = await Note.update(noteData, {
        where: { note_id: note_id },
      });
      res.send(updateNote);
    } catch (error) {
      console.log(error);
    }
  }

  // [DELETE] soft-delette: /notes/detele-note/:note_id
  async deleteNote(req, res, next) {
    try {
      let note_id = req.params.note_id;
      await Note.destroy({ where: { note_id: note_id } });
      res.send(note_id);
    } catch (error) {
      next(error);
    }
  }

  // [DELETE] hard-delete: /notes/permanently-delete/:note_id
  async permanentlyDeleted(req, res, next) {
    try {
      let note_id = req.params.note_id;
      await Note.destroy({ where: { note_id: note_id }, force: true });
      res.send(note_id);
    } catch (error) {
      next(error);
    }
  }

  // [GET] /notes/recyle-bin
  async recycleBin(req, res, next) {
    try {
      const recycleBin = await Note.findAll({
        where: {
          deletedAt: {
            [Op.not]: null,
          },
        },
        paranoid: false,
        raw: true,
      });
      res.send(recycleBin);
    } catch (error) {
      next(error);
    }
  }

  // [POST]: /notes/restore/:note_id
  async restoreNote(req, res, next) {
    try {
      let id = req.params.note_id;
      await Note.restore({ where: { note_id: id } });
      res.send(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new NoteController();
