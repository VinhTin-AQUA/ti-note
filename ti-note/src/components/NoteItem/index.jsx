import { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { Link } from "react-router-dom";

import { deleteNote, permanentlyDeleteNote, restoreNote } from "../../api/note";

function NoteItem({ note }) {
  const [linkEdit, setLinkEdit] = useState(
    note.type === "text"
      ? `/notes/edit-text-note/${note.note_id}`
      : `/notes/edit-todo-note/${note.note_id}`
  );

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDelete = () => {
    const notePromise = deleteNote(note);
    window.location.reload();
  };

  const handlePermanentlyDelete = () => {
    const notePromise = permanentlyDeleteNote(note);
    window.location.reload();
  };

  const handleRestore = () => {
    const notePromise = restoreNote(note);
    window.location.reload();
  };

  return (
    <div
      className={`shadow-[0_2px_5px_-1px_black] w-[150px] h-[150px] m-3 sm:m-2 rounded-2xl select-none hover:shadow-[0_2px_7px_3px_gray]`}
      style={{ background: note.color }}
    >
      <GoKebabHorizontal
        onClick={handleShowMenu}
        className="relative left-[110px] top-[5px] cursor-pointer hover:bg-[#64748b] rounded-full"
        size={28}
      />

      <Link
        to={note.deletedAt !== null ? "" : linkEdit}
        state={{ noteData: note }}
      >
        <div className="font-monotype-corsiva text-[#083344] text-[19px] font-bold ml-2 w-[135px] h-[65px] overflow-hidden leading-tight line-clamp-3 ">
          {note.name}
        </div>
        <span className="text-[0.8em] relative top-5 left-3 select-none">
          {new Date(note.updatedAt).toISOString().split("T")[0]}
        </span>
      </Link>

      {note.deletedAt != null ? (
        <div
          className={`${
            showMenu == true ? "h-[51px]" : "h-[0px]"
          } overflow-hidden relative top-[-80px] left-[50px] bg-blue-100 rounded-xl duration-200`}
        >
          <ul className="">
            <li
              onClick={handleRestore}
              className="text-center text-red-700 font-bold hover:bg-blue-900 hover:text-white rounded-t-xl duration-75 border-b-2 border-b-black"
            >
              Restore
            </li>

            <li
              onClick={handlePermanentlyDelete}
              className="text-center font-bold hover:bg-blue-900 hover:text-white rounded-b-xl duration-75 border-b-2 border-b-black"
            >
              Permanently Delete
            </li>
          </ul>
        </div>
      ) : (
        <div
          className={`${
            showMenu == true ? "h-[102px]" : "h-[0px]"
          } overflow-hidden relative top-[-80px] left-[50px] bg-blue-100 rounded-xl duration-200`}
        >
          <ul className="">
            <li
              onClick={handleDelete}
              className="text-center text-red-700 font-bold hover:bg-blue-900 hover:text-white rounded-t-xl duration-75 border-b-2 border-b-black"
            >
              Delete
            </li>
            <li
              onClick={handlePermanentlyDelete}
              className="text-red-700 text-center font-bold hover:bg-blue-900 hover:text-white duration-75 border-b-2 border-b-black"
            >
              Permanently Delete
            </li>
            <li className="text-center font-bold hover:bg-blue-900 hover:text-white duration-75 border-b-2 border-b-black">
              Delete
            </li>
            <li className="text-center font-bold hover:bg-blue-900 hover:text-white rounded-b-xl duration-75 border-b-2 border-b-black">
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
