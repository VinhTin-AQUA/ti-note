import { useState, useEffect } from "react";
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
    <div className="max-w-[150px] max-h-[150px] m-3 sm:m-2">
      <Link
        className={`block shadow-[0_2px_5px_-1px_black] bg-red-800 w-[150px] h-[150px]  rounded-2xl select-none hover:shadow-[0_2px_7px_3px_gray]`}
        style={{ background: note.color }}
        to={note.deletedAt !== null ? "" : linkEdit}
        state={{ noteData: note }}
      >
        <div className="pt-10 font-monotype-corsiva text-[#083344] text-[19px] font-bold ml-2 w-[135px] h-[65px] leading-tight overflow-hidden truncate">
          {note.name}
        </div>
        <span className=" text-[0.8em] relative top-10 left-3 select-none">
          {new Date(note.updatedAt).toISOString().split("T")[0]}
        </span>
      </Link>

      <GoKebabHorizontal
        onClick={handleShowMenu}
        className="bg-[#172554] text-white relative left-[110px] top-[-140px] cursor-pointer hover:bg-[#64748b] rounded-full"
        size={28}
      />

      {note.deletedAt != null ? (
        <div
          className={`${
            showMenu == true ? "h-[51px]" : "h-[0px]"
          } overflow-hidden relative top-[-130px] left-[50px] bg-blue-100 rounded-xl duration-200`}
        >
          <ul className="">
            <li
              onClick={handleRestore}
              className="text-center text-red-700 font-bold hover:bg-blue-900 hover:text-white rounded-t-xl duration-75 border-b-2 border-b-black cursor-pointer"
            >
              Restore
            </li>

            <li
              onClick={handlePermanentlyDelete}
              className="text-center font-bold hover:bg-blue-900 hover:text-white rounded-b-xl duration-75 border-b-2 border-b-black  cursor-pointer"
            >
              Permanently Delete
            </li>
          </ul>
        </div>
      ) : (
        <div
          className={`${
            showMenu == true ? "h-[102px]" : "h-[0px]"
          } overflow-hidden relative top-[-130px] left-[50px] bg-blue-100 rounded-xl duration-200`}
        >
          <ul className="">
            <li
              onClick={handleDelete}
              className="text-center text-red-700 font-bold hover:bg-blue-900 hover:text-white rounded-t-xl duration-75 border-b-2 border-b-black cursor-pointer"
            >
              Delete
            </li>
            <li
              onClick={handlePermanentlyDelete}
              className="text-red-700 text-center font-bold hover:bg-blue-900 hover:text-white duration-75 border-b-2 border-b-black  cursor-pointer"
            >
              Permanently Delete
            </li>
            <li className="text-center font-bold hover:bg-blue-900 hover:text-white duration-75 border-b-2 border-b-black   cursor-pointer">
              Delete
            </li>
            <li className="text-center font-bold hover:bg-blue-900 hover:text-white rounded-b-xl duration-75 border-b-2 border-b-black cursor-pointer">
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
