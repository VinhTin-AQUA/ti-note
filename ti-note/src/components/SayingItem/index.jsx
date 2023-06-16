import { CiCircleRemove } from "react-icons/ci";
import { useState } from "react";

import { updateSaying, deleteSaying } from "../../api/niceSaying";


function SayingItem({ say }) {
  const [sayingData, setSayingData] = useState({ ...say });

  const hanldeChangeSaying = (e) => {
    setSayingData((prev) => {
      const newSaying = { ...prev, saying_item: e.target.value };
      const sayingPromise = updateSaying(newSaying);
      return newSaying;
    });
  };

  const handleDeleteSaying = () => {
    const deleteSayingpromise = deleteSaying(sayingData.saying_id);
    window.location.reload();
  };

  return (
    <div key={say.saying_id} className="w-[90%] m-1 flex justify-around">
      <textarea
        value={sayingData.saying_item}
        onChange={hanldeChangeSaying}
        spellCheck={false}
        className="font-simSun text-[20px] peer h-[95%] min-h-[100px] w-[90%] resize-none rounded-[7px] border px-3 py-2.5 font-sans text-sm  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900  focus:outline-0 disabled:resize-none "
        placeholder=" "
      ></textarea>

      <button onClick={handleDeleteSaying} className="">
        <CiCircleRemove
          size={40}
          className="text-blue-950 hover:bg-red-600 hover:text-white rounded-full duration-150"
        />
      </button>
    </div>
  );
}

export default SayingItem;
