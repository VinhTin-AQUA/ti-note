import { useEffect, useState, useRef } from "react";

import { getQuickTodos, addTodo } from "../../api/quicktodo";
import TodoItem from "../../components/QuickTodoItem";

function Tasks() {
  const [quickTodos, setQuickTodo] = useState([]);
  const [newTodo, setNewTodo] = useState({ quick_todo_item: "" });
  const todoRef = useRef();

  useEffect(() => {
    todoRef.current.focus();
    const promiseTodo = getQuickTodos();
    promiseTodo
      .then(function (promise) {
        return promise.data;
      })
      .then(function (data) {
        setQuickTodo(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const handleChangeTodo = (e) => {
    setNewTodo({ quick_todo_item: e.target.value });
  };

  const handleAddTodo = () => {
    const promiseTodo = addTodo(newTodo);
    window.location.reload();
    todoRef.current.focus();
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full bg-[#ecfeff] h-12 flex justify-center items-center p-3">
        <span className="font-simSun font-bold text-2xl text-[#15803d]">
          Edit Tasks
        </span>
        <span></span>
      </div>

      <div className="w-full h-[88%] flex mt-5 ">
        <div className="w-[50%] ">
          {/* text  */}
          <div className="relative w-full  h-[200px] m-2 ">
            <textarea
              ref={todoRef}
              spellCheck={false}
              value={newTodo.quick_todo_item}
              onChange={handleChangeTodo}
              name="text"
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Task
            </label>
          </div>

          {/*add  button */}
          <div className="flex items-center justify-center m-2 h-12">
            <button
              onClick={handleAddTodo}
              className="w-64 h-[40px] border-2 border-blue-900 text-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white duration-150"
            >
              Add
            </button>
          </div>
        </div>

        <div className="sm:h-[95%] h-[90%] w-[60%] m-2 flex flex-col items-center overflow-x-hidden overflow-y-auto">
          {quickTodos.map((todo) => {
            return <TodoItem key={todo.quick_todo_id} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
