import http from "../../http-common";
import { saveTodo, deleteAllTodosOfNote } from "./todo";
import { deleteAllTextOfNote } from "./textNote";

async function getNotes() {
  try {
    const notes = await http.get("/notes");
    return notes;
  } catch (error) {
    log(error);
  }
}

async function getTextNotes() {
  try {
    const notes = await http.get("/notes/text-notes");
    return notes;
  } catch (error) {
    log(error);
  }
}

async function getTodos() {
  try {
    const notes = await http.get("/notes/todos");
    return notes;
  } catch (error) {
    log(error);
  }
}

async function saveTextNote(data) {
  try {
    const note = await http.post("/notes/save-text-note", data);
    return note;
  } catch (error) {
    log(error);
  }
}

async function updateTextNote(data) {
  try {
    const notes = await http.put(
      `/notes/update-text-note/${data.note_id}`,
      data
    );
    return notes;
  } catch (error) {
    log(error);
  }
}

async function saveTodoNote(noteName, todolist) {
  try {
    const note = await http.post("/notes/save-todo-note", {
      name: noteName.name,
    });

    for (let i = 0; i < todolist.length; i++) {
      const note_id = note.data.note_id;
      const todoTemp = { ...todolist[i], note_id };
      saveTodo(todoTemp);
    }

    return note;
  } catch (error) {
    log(error);
  }
}

async function updateTodoNote(data) {
  try {
    const notes = await http.put(
      `/notes/update-text-note/${data.note_id}`,
      data
    );
    return notes;
  } catch (error) {
    log(error);
  }
}

async function updateNoteName(note) {
  try {
    const notes = await http.put(
      `/notes/update-note-name/${note.note_id}`,
      note
    );
    return notes;
  } catch (error) {
    log(error);
  }
}

async function deleteNote(note) {
  try {
    const notes = await http.delete(`/notes/delete-note/${note.note_id}`);
    return notes;
  } catch (error) {
    log(error);
  }
}

async function permanentlyDeleteNote(note) {
  try {
    if (note.type === "text") {
      deleteAllTextOfNote(note.note_id);
    } else if (note.type === "todo") {
      deleteAllTodosOfNote(note.note_id);
    }

    const notes = await http.delete(
      `/notes/permanently-delete-note/${note.note_id}`
    );

    return notes;
  } catch (error) {
    log(error);
  }
}

async function recycleBin() {
  try {
    const notes = await http.get("/notes/recyle-bin");
    return notes;
  } catch (error) {
    console.log(error);
  }
}

async function restoreNote(note) {
  try {
    const notes = await http.post(`/notes/restore/${note.note_id}`);
    return notes;
  } catch (error) {
    console.log(error);
  }
}

export {
  getNotes,
  getTextNotes,
  getTodos,
  saveTextNote,
  updateTextNote,
  saveTodoNote,
  updateTodoNote,
  updateNoteName,
  deleteNote,
  permanentlyDeleteNote,
  recycleBin,
  restoreNote,
};
