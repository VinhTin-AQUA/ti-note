import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";

import { updateTodo } from "../../api/todo";

function TodoItem({ todo, handleChangeDataTodo, handleDeleteTodoItem }) {
  const [todoData, setTodoData] = useState(todo);

  // update todo item
  const handleUpdateTodo = (e) => {
    if (e.target.type === "text") {
      updateTodo({ ...todoData, item: e.target.value });
      setTodoData({ ...todoData, item: e.target.value });
      handleChangeDataTodo(todo.todo_id, e.target.value, "text");
      
    } else if (e.target.type === "date") {
      updateTodo({ ...todoData, deadline: e.target.value });
      setTodoData({ ...todoData, deadline: e.target.value });
      handleChangeDataTodo(todo.todo_id, e.target.value, "date");
      
    } else if (e.target.type === "checkbox") {
      updateTodo({ ...todoData, completed: e.target.checked });
      setTodoData({ ...todoData, completed: e.target.checked });
      handleChangeDataTodo(todo.todo_id, e.target.checked, "checkbox");
      
    }
  };

  const deleteTodoItem = () => {
    handleDeleteTodoItem(todoData.todo_id);
  };

  return (
    <div className="relative ml-2 mb-2 h-10  w-[100%] sm:min-w-[200px] min-w-[140px] flex justify-around items-center">
      {/* checkbox */}
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="checkbox-3"
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity bg-blue-200 checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
            id="checkbox-3"
            checked={todoData.completed}
            onChange={handleUpdateTodo}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
      </div>

      {/* text */}
      <input
        spellCheck={false}
        name="link"
        type="text"
        onChange={handleUpdateTodo}
        value={todoData.item}
        className="mx-3 peer h-full w-[50%] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900  "
        placeholder=" "
      />

      {/* deadline */}
      <input
        onChange={handleUpdateTodo}
        className="outline-none border-b-2 focus:border-b-blue-900 duration-300"
        type="date"
        value={new Date(todoData.deadline).toISOString().split("T")[0]}
      />

      {/* delete buttn */}
      <button onClick={deleteTodoItem}>
        <CiCircleRemove
          size={40}
          className="text-blue-950 hover:bg-red-600 hover:text-white rounded-full duration-150"
        />
      </button>
    </div>
  );
}

export default TodoItem;
