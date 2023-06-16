
import { useEffect, useState } from "react";

import { getSaying } from "../../api/niceSaying";
import { getQuickTodos } from "../../api/quicktodo";
import { getQuickText } from "../../api/quickText";

function Home() {
  const [saying, setSaying] = useState([]);
  const [quickTodos, setQuickTodos] = useState([]);
  const [quickText, setQuickText] = useState("");
  const [sayingIndex, setSayingIndex] = useState(0);

  // lay data
  useEffect(() => {
    const sayingPromise = getSaying();
    const quickTodoPromise = getQuickTodos();
    const quickTextpromise = getQuickText();

    sayingPromise
      .then(function (promise) {
        return promise.data;
      })
      .then(function (data) {
        setSaying(data);
      })
      .catch(function (err) {
        console.log(err);
      });

    quickTodoPromise
      .then(function (promise) {
        return promise.data;
      })
      .then(function (data) {
        setQuickTodos(data);
      })
      .catch(function (err) {
        console.log(err);
      });

    quickTextpromise
      .then(function (promise) {
        return promise.data;
      })
      .then(function (data) {
        setQuickText(data.item);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const lenSaying = saying.length;
    const lenSlide = lenSaying;



    // su kien thay doi cau noi
    const timeIncSaying = setInterval(() => {
      setSayingIndex((prev) => {
        return prev >= lenSaying - 1 ? 0 : ++prev;
      });
    }, 3000);

    return () => {
      clearInterval(timeIncSaying);
    };
  }, [saying]);

  const handleChangeQuickNote = () => {};

  return (
    <div className="flex sm:flex-row flex-col w-full">
      <div className="w-[97%]">
        {/* img */}
        <div
          className="rounded-[10px] m-4 text-white sm:h-[350px] h-[200px] flex items-center justify-center bg-cover ease-in duration-300"
          style={{
            backgroundImage: `url(${
              saying.length !== 0 && saying[sayingIndex].linkImg
            })`,
          }}
        >
          <span className="bg-black/50 p-3 rounded-lg font-simSun font-bold text-center sm:text-[1.5em] text-[0.8em] overflow-hidden leading-tight line-clamp-6">
            {saying.length !== 0 && saying[sayingIndex].saying_item}
          </span>
        </div>

        {/* quick text */}
        <div className="relative sm:h-[40%] h-[200px] m-4">
          <textarea
            value={quickText}
            onChange={handleChangeQuickNote}
            spellCheck={false}
            className="font-simSun text-[1.5em] peer h-[95%] min-h-[100px] w-full resize-none rounded-[7px] border px-3 py-2.5 font-sans text-sm  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900  focus:outline-0 disabled:resize-none "
            placeholder=" "
          ></textarea>
        </div>
      </div>

      {/* task */}
      <div className="sm:w-[38%] h-screen sm:ml-2 mx-1">
        <div className=" text-2xl font-bold text-center p-2">
          <h2>Tasks</h2>
        </div>

        <div className="h-[90%] sm:overflow-x-hidden sm:overflow-y-scroll border-l-2 border-l-black">
          <ul>
            {quickTodos.map((quickTodo) => {
              return (
                <li
                  key={quickTodo.quick_todo_id}
                  className="hover:bg-[#172554] hover:text-white w-[97%] text-center text-[1.2em] break-all flex justify-between items-center p-4 border-b-2 border-b-black duration-200"
                >
                  <span>{quickTodo.quick_todo_item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
