import { useEffect, useState } from "react";

import { recycleBin } from "../../api/note";
import NoteItem from "../../components/NoteItem";

function RecycleBin() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notePromise = recycleBin();
    notePromise
      .then(function (promise) {
        return promise.data;
      })
      .then(function (data) {
        setNotes(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-wrap h-full ">
      {notes.map((note, index) => {
        return <NoteItem key={index} note={note} />;
      })}
    </div>
  );
}

export default RecycleBin;
