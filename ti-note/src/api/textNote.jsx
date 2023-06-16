import http from "../../http-common";

async function getTextOfNote(note_id) {
  try {
    const text = await http.get(`/text-note/get-text/${note_id}`);
    return text;
  } catch (error) {
    console.log(error);
  }
}

async function deleteAllTextOfNote(note_id) {
  try {
    const text = await http.delete(`/text-note/delete-all-text-of-note/${note_id}`);
    return text;
  } catch (error) {
    console.log(error);
  }
}

export { getTextOfNote, deleteAllTextOfNote };
