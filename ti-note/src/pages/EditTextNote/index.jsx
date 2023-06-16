import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./TextEditor.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import { saveTextNote, updateTextNote } from "../../api/note";
import { getTextOfNote } from "../../api/textNote";

function EditTextNote() {
  const quillRef = useRef();
  const titleRef = useRef();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const [textNote, setTextNote] = useState(
    state != null
      ? { ...state.noteData, text_data: "" }
      : { name: "no title", text_data: "" }
  );

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.editor.root.spellcheck = false;
    }

    // lấy nội dung text của note nếu có note truyền tới để chỉnh sửa
    if (textNote.note_id) {
      const textPromise = getTextOfNote(textNote.note_id);
      textPromise
        .then(function (promise) {
          return promise.data;
        })
        .then(function (data) {
          setTextNote({ ...textNote, text_data: data.text_data });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }, []);

  const handleFocus = () => {
    titleRef.current.select();
  };

  const handleChangeTitle = (e) => {
    setSaved(false);
    setTextNote({ ...textNote, name: e.target.value });
  };

  const handleChangeText = (value) => {
    setSaved(false);
    setTextNote({ ...textNote, text_data: value });
  };

  const handleSaveNote = () => {
    setSaved(true);
    if (textNote.note_id) {
      // nếu có note truyền tới thì cập nhật
      const norePromise = updateTextNote(textNote);
    } else {
      // nếu không có note truyền tới thì tạo note mới
      const notePromise = saveTextNote(textNote);
      notePromise
        .then(function (promise) {
          return promise.data;
        })
        .then(function (data) {
          navigate("/notes/edit-text-note/" + data.note_id, {
            state: { noteData: data },
          });
          window.location.reload();
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  return (
    <div className="h-[100%] sm:w-react-quill-with-sm w-react-quill-with sm:m-0 m-1">
      <div className="p-3 w-full h-12 fixed flex items-center bg-white z-10 justify-start gap-8">
        <button
          onClick={handleSaveNote}
          className=" border-blue-900 border-2 outline-none  w-14 h-8 rounded-full text-blue-900 font-bold hover:bg-blue-900 hover:text-white duration-150 "
          style={{background: saved ? "#1e3a8a" : "", color: saved ? "#ffffff" : ""}}
        >
          Save
        </button>
        <div className="md:w-[350px] w-[200px] h-10">
          <input
            ref={titleRef}
            onChange={handleChangeTitle}
            onFocus={handleFocus}
            spellCheck={false}
            value={textNote.name}
            className="focus:select-all px-4 outline-none rounded-full bg-[#ede9fe] md:w-[350px] w-[200px] h-10 border-2 focus:border-blue-900 focus:bg-[#fae8ff] duration-150"
            placeholder="title"
            type="text"
          />
        </div>
      </div>
      <div className="h-12"></div>

      <div>
        <EditorToolbar toolbarId={"t2"} />
        <ReactQuill
          onChange={handleChangeText}
          value={textNote.text_data}
          ref={quillRef}
          className="ql-container "
          placeholder={"Write something awesome..."}
          modules={modules("t2")}
          formats={formats}
        />
      </div>
    </div>
  );
}

export default EditTextNote;
