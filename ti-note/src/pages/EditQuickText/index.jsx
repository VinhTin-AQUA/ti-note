import { useState, useEffect, useRef } from "react";
import { getQuickText, saveQuickText } from "../../api/quickText";

function ChangeQuickText() {
  const [text, setText] = useState({ quicktext_id: -1 });
  const [saved, setSaved] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const quickTextpromise = getQuickText();
    textRef.current.focus();

    quickTextpromise
      .then(function (promise) {
        return promise.data;
      })
      .then(function (data) {
        setText({ ...text, ...data });
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const handleQuickText = (e) => {
    setText({ ...text, item: e.target.value });
    setSaved(false);
  };

  const handleSaveText = () => {
    const save = saveQuickText(text);
    setSaved(true);
    textRef.current.focus();
  };

  return (
    <div className="flex w-[96%]  flex-col items-start gap-6 m-4">
      <div className="flex w-full justify-between items-center">
        <button
          onClick={handleSaveText}
          style={{ background: `${saved == true ? "black" : "white"}`,
          color: `${saved == true ? "white" : "black"}` }}
          className="w-[60px] h-[40px] border-2 border-blue-900 text-blue-900 rounded-3xl hover:bg-blue-900 hover:text-white duration-150"
        >
          Save
        </button>
        <div className="underline text-2xl font-800 text-[#22c55e] font-monotype-corsiva">
          Write your mind
        </div>
        <div></div>
      </div>
      <div className="relative h-[95%] w-full min-w-[200px]">
        <textarea
          ref={textRef}
          value={text.item}
          onChange={handleQuickText}
          spellCheck={false}
          className="font-simSun text-[1.5em] peer h-[95%] min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-blue-900">
          Quick Text
        </label>
      </div>
    </div>
  );
}

export default ChangeQuickText;
