import http from "../../http-common";

async function getQuickTodos() {
  try {
    const quickTodos = http.get("/quick-todos");
    return quickTodos;
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(todoData) {
  try {
    const newTodo = await http.post("/quick-todos/add-quick-todo", todoData);
    return newTodo;
  } catch (error) {
    console.log(error);
  }
}

async function deleteQuickTodo(quick_todo_id) {
  try {
    const newTodo = await http.delete(
      `/quick-todos/delete-quick-todo/${quick_todo_id}`
    );
    return newTodo;
  } catch (error) {
    console.log(error);
  }
}

async function updateQuickTodo(todoData) {
  try {
    const updateTodo = await http.put(
      `/quick-todos/update-quick-todo/${todoData.quick_todo_id}`,
      todoData
    );
    return updateTodo;
  } catch (error) {
    console.log(error);
  }
}

export { getQuickTodos, addTodo, deleteQuickTodo, updateQuickTodo };
