import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

import { getTodos } from "../../api/note";
import NoteItem from "../../components/NoteItem";

function Todo() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const _getNotes = () => {
      let notes = getTodos();

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

      <Link  to="/notes/edit-todo-note">
        <div className="fixed right-2 bottom-2 cursor-pointer hover:text-white text-blue-900 hover:bg-blue-900 rounded-full duration-150">
          <IoIosAddCircle size={50} />
        </div>
      </Link>
    </div>
  );
}

export default Todo;
