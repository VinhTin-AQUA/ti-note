/*
  for quick-todo
*/


import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

import { deleteQuickTodo, updateQuickTodo } from "../../api/quicktodo";

function TodoItem({ todo }) {
  const [todoData, setTodoData] = useState(todo);

  const handleDelete = () => {
    const promiseTodo = deleteQuickTodo(todoData.quick_todo_id);
    window.location.reload();
  };

  const handleUpdateTodo = (e) => {
    setTodoData((prev) => {
      const updateTodo = { ...prev, quick_todo_item: e.target.value };
      const promiseTodo = updateQuickTodo(updateTodo);
      return updateTodo;
    });
  };

  return (
    <div className="relative ml-2 mb-2 h-10 sm:w-[100%] sm:min-w-[200px] min-w-[140px] w-[10%] flex justify-around items-center">
      <input
        spellCheck={false}
        name="link"
        onChange={handleUpdateTodo}
        value={todoData.quick_todo_item}
        className="peer h-full w-[80%] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900  "
        placeholder=" "
      />
      <button onClick={handleDelete}>
        <CiCircleRemove
          size={40}
          className="text-blue-950 hover:bg-red-600 hover:text-white rounded-full duration-150"
        />
      </button>
    </div>
  );
}

export default TodoItem;
