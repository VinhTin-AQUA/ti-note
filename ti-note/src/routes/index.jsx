import Setting from "../pages/Setting";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Notes from "../pages/Notes";
import TextNotes from "../pages/TextNote";
import Todo from "../pages/Todo";
import RecycleBin from "../pages/RecycleBin";
import AutoChat from "../pages/AutoChat";
import EditQuickText from "../pages/EditQuickText";
import Tasks from "../pages/Tasks";
import EditSaying from "../pages/EditSaying";
import EditTextNote from "../pages/EditTextNote";
import EditTodo from "../pages/EditTodo";

//layout
import Default from "../components/Layouts/Default";

const publicRoutes = [
  { path: "/", component: Home, layout: Default },
  { path: "/about", component: About, layout: Default },
  { path: "/contact", component: Contact, layout: Default },

  { path: "/notes", component: Notes, layout: Default },
  { path: "/notes/text-notes", component: TextNotes, layout: Default },
  { path: "/notes/todo", component: Todo, layout: Default },

  { path: "/notes/notification", component: AutoChat, layout: Default },
  { path: "/notes/edit-quick-text", component: EditQuickText, layout: Default },
  { path: "/notes/edit-tasks", component: Tasks, layout: Default },
  { path: "/notes/edit-saying", component: EditSaying, layout: Default },
  { path: "/notes/edit-text-note/:note_id", component: EditTextNote, layout: Default },
  { path: "/notes/edit-text-note", component: EditTextNote, layout: Default },
  { path: "/notes/edit-todo-note", component: EditTodo, layout: Default },
  { path: "/notes/edit-todo-note/:note_id", component: EditTodo, layout: Default },

  { path: "/setting", component: Setting, layout: Default },
  { path: "/recycle-bin", component: RecycleBin, layout: Default },
];

export { publicRoutes };
