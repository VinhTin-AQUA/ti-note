import http from "../../http-common";

async function saveTodo(todo) {
  try {
    const newTodo = await http.post("/todo/save-todo", todo);
    return newTodo;
  } catch (error) {
    console.log(error);
  }
}

async function getTodosOfNote(note) {
  try {
    const todos = await http.get(`/todo/get-todos/${note.note_id}`);
    return todos;
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(todo) {
  try {
    const _todo = await http.post(`/todo/add-todo`, todo);
    return _todo;
  } catch (error) {
    console.log(error);
  }
}

async function removeTodo(todo_id) {
  try {
    const todo = await http.delete(`/todo/remove-todo/${todo_id}`);
    return todo;
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(_todo) {
  try {
    const todo = await http.put(`/todo/update-todo/${_todo.todo_id}`, _todo);
    return todo;
  } catch (error) {
    console.log(error);
  }
}



export {
  saveTodo,
  getTodosOfNote,
  addTodo,
  removeTodo,
  updateTodo
};
