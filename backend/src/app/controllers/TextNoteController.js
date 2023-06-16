const db = require("../models/index");

const TextNote = db.textNote;
const Op = db.Op;

class TextNoteController {
  // [GET] /text-note/get-text/:note_id
  async getTextOfNote(req, res, next) {
    try {
      const note_id = req.params.note_id;
      const textData = await TextNote.findOne({ where: { note_id: note_id } });
      res.send(textData);
    } catch (error) {
      console.log(error);
    }
  }

  // [DELETE] /text-note/delete-all-text-of-note/:note_id
  async deleteAllTextOfNote(req,res,next) {
    try {
      const note_id = req.params.note_id;
      const textData = await TextNote.destroy({ where: { note_id: note_id } });
      res.send(textData);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TextNoteController();
