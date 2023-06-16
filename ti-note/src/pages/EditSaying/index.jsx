import { useEffect, useState } from "react";

import { getSaying, addSaying } from "../../api/niceSaying";
import SayingItem from "../../components/SayingItem";

function ChangeSaying() {
  const [saying, setSaying] = useState([]);
  const [newSaying, setNewSaying] = useState({ saying_item: "", linkImg: "" });

  useEffect(() => {
    const sayingPromise = getSaying();

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
  }, []);

  const handleChangeNewSaying = (e) => {
    if (e.target.name === "text") {
      setNewSaying({ ...newSaying, saying_item: e.target.value });
    } else if (e.target.name === "link") {
      setNewSaying({ ...newSaying, linkImg: e.target.value });
    }
  };

  const handleAddSaying = () => {
    addSaying(newSaying);
    window.location.reload();
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full bg-[#ecfeff] h-11 flex justify-center items-center p-3">
        <span className="font-simSun font-bold text-2xl text-[#15803d]">
          Nice Saying
        </span>
        <span></span>
      </div>

      <div className="w-full h-[89%] flex mt-5 flex-col sm:flex-row">
        <div className="sm:w-[40%] w-[100%] h-full">
          {/* text  */}
          <div className="relative w-full min-w-[200px] m-2">
            <textarea
              spellCheck={false}
              onChange={handleChangeNewSaying}
              value={newSaying.saying_item}
              name="text"
              className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            ></textarea>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Nice Saying
            </label>
          </div>

          {/* link img */}
          <div className="relative w-full min-w-[200px] m-2">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                spellCheck={false}
                name="link"
                onChange={handleChangeNewSaying}
                value={newSaying.linkImg}
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Link img
              </label>
            </div>
          </div>

          {/*add  button */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handleAddSaying}
              className="w-64 h-[40px] border-2 border-blue-900 text-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white duration-150"
            >
              Add
            </button>
          </div>
        </div>

        <div className="overflow-y-auto sm:w-[60%] w-[100%] h-full flex flex-col items-centerhttp://localhost:5173/notification">
          {saying.map((say) => {
            return <SayingItem key={say.saying_id} say={say} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ChangeSaying;
