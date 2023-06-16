import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import { saveTodoNote, updateNoteName } from "../../api/note";
import { getTodosOfNote, addTodo, removeTodo } from "../../api/todo";

function EditTodo() {
  const titleRef = useRef();
  const itemRef = useRef();
  const [saved, setSaved] = useState(false);
  const [todoList, setTodolist] = useState([]);
  const [tempId, setTempId] = useState(0);
  const [item, setItem] = useState("");
  const { state } = useLocation();
  const [todoNote, setTodoNote] = useState(
    state != null ? { ...state.noteData } : { name: "no title" }
  );
  const navigate = useNavigate();

  const handleFocus = (ref) => {
    ref.current.select();
  };

  useEffect(() => {
    if (todoNote.note_id) {
      const todoPromise = getTodosOfNote(todoNote);
      todoPromise
        .then(function (promise) {
          return promise.data;
        })
        .then(function (data) {
          setTodolist(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  const handleChangeItem = (e) => {
    setItem(e.target.value);
  };

  const handleChangeNoteName = (e) => {
    setTodoNote({ ...todoNote, name: e.target.value });
    setSaved(false);
  };

  const handleAddTodo = (e) => {
    setSaved(false);

    if (todoNote.note_id) {
      const todo = {
        todo_id: tempId,
        item: item,
        completed: false,
        deadline: new Date().toISOString().split("T")[0],
        note_id: todoNote.note_id,
      };
      const notePromise = addTodo(todo);

      notePromise
        .then(function (promise) {
          return promise.data;
        })
        .then(function (data) {
          setTodolist([...todoList, data]);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      const todo = {
        todo_id: tempId,
        item: item,
        completed: false,
        deadline: new Date().toISOString().split("T")[0],
      };
      setTempId(tempId + 1);
      setTodolist([...todoList, todo]);
    }
  };

  const handleChangeDataTodo = (todo_id, value, type) => {
    const foundItem = todoList.find((item) => item.todo_id === todo_id);

    if (type === "text") {
      foundItem.item = value;
    } else if (type === "date") {
      foundItem.deadline = value;
    } else if (type === "checkbox") {
      foundItem.completed = value;
    }
  };

  const handleDeleteTodoItem = (todo_id) => {
    if (todoNote.note_id) {
      const notePromise = removeTodo(todo_id);
    }

    const newTodoList = todoList.filter((todo) => todo.todo_id !== todo_id);
    setSaved(false);
    setTodolist(newTodoList);
  };

  const handleSave = () => {
    //console.log(todoList);
    setSaved(true);
    //console.log(todoNote);
    if (todoNote.note_id) {
      const notePromise = updateNoteName(todoNote);
    } else {
      const notePromise = saveTodoNote(todoNote, todoList);
      notePromise
        .then(function (promise) {
          return promise.data;
        })
        .then(function (data) {
          navigate("/notes/edit-todo-note/" + data.note_id, {
            state: { noteData: data },
          });
          window.location.reload();
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full bg-[#ecfeff] h-12 flex justify-start items-center p-3 gap-3">
        <button
          onClick={handleSave}
          className=" border-blue-900 border-2 outline-none w-14 h-8 rounded-full text-blue-900 font-bold hover:bg-blue-900 hover:text-white duration-150 "
          style={{
            background: saved ? "#1e3a8a" : "",
            color: saved ? "#ffffff" : "",
          }}
        >
          Save
        </button>
        <input
          value={todoNote.name}
          onChange={handleChangeNoteName}
          ref={titleRef}
          onFocus={() => handleFocus(titleRef)}
          spellCheck={false}
          className="focus:select-all px-4 outline-none rounded-full bg-[#ede9fe] md:w-[350px] w-[200px] h-10 border-2 focus:border-blue-900 focus:bg-[#fae8ff] duration-150"
          placeholder="title"
          type="text"
        />
      </div>

      <div className="w-full h-[88%] flex mt-5 md:flex-row flex-col">
        <div className="md:w-[50%] w-[95%]">
          {/* text  */}
          <div className="relative w-full  h-[200px] m-2 ">
            <textarea
              ref={itemRef}
              value={item}
              onChange={handleChangeItem}
              onFocus={() => handleFocus(itemRef)}
              spellCheck={false}
              name="text"
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Todo
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

        <div className="sm:h-[95%] h-[90%] md:w-[60%] w-[95%] m-2 flex flex-col items-center overflow-x-hidden overflow-y-auto">
          {todoList.map((todo) => {
            return (
              <TodoItem
                handleChangeDataTodo={handleChangeDataTodo}
                handleDeleteTodoItem={handleDeleteTodoItem}
                key={todo.todo_id}
                todo={todo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
