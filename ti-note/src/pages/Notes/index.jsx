import { useEffect, useState } from "react";

import { getNotes } from "../../api/note";
import NoteItem from "../../components/NoteItem";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const _getNotes = () => {
      let notes = getNotes();

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
    <>
      {notes.length != 0 ? (
        <div className="flex flex-wrap h-full ">
          {notes.map((note, index) => {
            return <NoteItem key={index} note={note} />;
          })}
        </div>
      ) : (
        <div className="w-full text-center text-blue-800 text-[40px] mt-10 font-bold underline">
          No Notes
        </div>
      )}
    </>
  );
}

export default Notes;
