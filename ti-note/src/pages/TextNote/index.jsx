import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import { getTextNotes } from "../../api/note";
import NoteItem from "../../components/NoteItem";

function TextNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const _getNotes = () => {
      let notes = getTextNotes();

      notes
        .then(function (axios) {
          return axios.data;
        })
        .then(function (data) {
          setNotes(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    _getNotes();
  }, []);

  return (
    <div className="flex flex-wrap h-full ">
      {notes.map((note, index) => {
        return <NoteItem key={index} note={note} />;
      })}
      <Link to="/notes/edit-text-note" className="fixed right-2 bottom-2 cursor-pointer">
        <div className=" hover:text-white text-blue-900 hover:bg-blue-900 rounded-full duration-150">
          <IoIosAddCircle size={50} />
        </div>
      </Link>
    </div>
  );
}

export default TextNotes;
