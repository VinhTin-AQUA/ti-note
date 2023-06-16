const db = require("../models/index");

const QuickTodo = db.quickTodo;

const Op = db.Op;

class QuickTodoController {
  // [get] /quick-todos
  async getQuickNote(req, res, next) {
    try {
      const quickNotes = await QuickTodo.findAll({ order: [["createdAt", "ASC"]],raw: true });
      res.send(quickNotes);
    } catch (error) {
      log(error);
    }
  }

  // [post] /quick-todos/add-todo
  async addTodo(req, res, next) {
    try {
      const todoData = {
        quick_todo_item: req.body.quick_todo_item,
      };
      const quickNotes = await QuickTodo.create(todoData);
      res.send(quickNotes);
    } catch (error) {
      log(error);
    }
  }

  // [delete] /quick-todos/delete-todo/:quick_todo_id
  async deleteQuickTodo(req, res, next) {
    try {
      const quick_todo_id = req.params.quick_todo_id;

      await QuickTodo.destroy({
        where: {
          quick_todo_id: quick_todo_id,
        },
      });

      res.send(quick_todo_id);
    } catch (error) {
      log(error);
    }
  }

  // [put] /quick-todos/update-quick-todo/:quick_todo_id
  async updateQuickTodo(req, res, next) {
    try {
      const quick_todo_id = req.params.quick_todo_id;
      const todoData = {
        quick_todo_item: req.body.quick_todo_item,
      };

      await QuickTodo.update(todoData, {
        where: {
          quick_todo_id: quick_todo_id,
        },
      });

      res.send(quick_todo_id);
    } catch (error) {
      log(error);
    }
  }
}

module.exports = new QuickTodoController();
