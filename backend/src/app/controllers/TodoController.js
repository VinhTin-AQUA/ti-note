const db = require("../../app/models");

const Todo = db.todo;

class TodoController {
  async saveTodo(req, res, next) {
    try {
      const note_id = req.body.note_id;
      const todoData = {
        item: req.body.item,
        completed: req.body.completed,
        deadline: req.body.deadline,
        note_id: note_id,
      };

      const newTodo = await Todo.create(todoData);
      res.send(newTodo);
    } catch (error) {
      console.log(error);
    }
  }

  // [get] /todo/get-todos/:note_id
  async getTodos(req, res, next) {
    try {
      const note_id = req.params.note_id;

      const todos = await Todo.findAll({
        raw: true,
        where: {
          note_id: note_id,
        },
      });
      res.send(todos);
    } catch (error) {
      console.log(error);
    }
  }

  // [POST] /todo/add-todo
  async addTodo(req, res, next) {
    try {
      const note_id = req.body.note_id;

      const todoData = {
        item: req.body.item,
        completed: req.body.completed,
        deadline: req.body.deadline,
        note_id: note_id,
      };

      const newTodo = await Todo.create(todoData);
      res.send(newTodo);
    } catch (error) {
      console.log(error);
    }
  }

  // [DELETE] /todo/remove-todo/:todo_id
  async removeTodo(req, res, next) {
    try {
      const todo_id = req.params.todo_id;
      const newTodo = await Todo.destroy({
        where: {
          todo_id: todo_id,
        },
      });
      res.send(todo_id);
    } catch (error) {
      console.log(error);
    }
  }

  // [put] /todo/update-item/:todo_id
  async updateTodo(req, res, next) {
    try {
      const todo_id = req.params.todo_id;
      const updateTodo = {
        item: req.body.item,
        completed: req.body.completed,
        deadline: req.body.deadline,
      };
      const update = await Todo.update(updateTodo, {
        where: {
          todo_id: todo_id,
        },
      });
      res.send(update);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAllTodosOfNote(req, res, next) {
    try {
      const note_id = req.params.note_id;

      const deleteTodos = await Todo.destroy({
        where: {
          note_id: note_id,
        },
      });
      res.send(deleteTodos);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TodoController();
