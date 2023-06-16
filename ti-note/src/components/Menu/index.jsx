
import { AiTwotoneHome, AiFillSetting } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { BsFillFileTextFill,BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FcTodoList, FcAbout } from "react-icons/fc";
import { IoMdNotifications } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { GiTrashCan } from "react-icons/gi";
import {GrTask} from "react-icons/gr";
import { Link } from "react-router-dom";

function Menu() {
  const menus = [
    {
      name: "Home",
      icon: AiTwotoneHome,
      link: "/",
    },
    {
      name: "Notes",
      icon: GiNotebook,
      link: "/notes",
    },
    {
      name: "Text Note",
      icon: BsFillFileTextFill,
      noteType: true,
      link: "/notes/text-notes",
    },
    {
      name: "Todo Note",
      icon: FcTodoList,
      noteType: true,
      link: "/notes/todo",
    },
    {
      name: "Auto Chat",
      icon: IoMdNotifications,
      noteType: true,
      link: "/notes/notification",
    },
    {
      name: "Quick Text",
      icon: BsFillFileEarmarkTextFill,
      noteType: true,
      link: "/notes/edit-quick-text",
    },
    {
      name: "Tasks",
      icon: GrTask,
      noteType: true,
      link: "/notes/edit-tasks",
    },
    {
      name: "Saying",
      icon: BsFillFileEarmarkTextFill,
      noteType: true,
      link: "/notes/edit-saying",
    },
    {
      name: "Recycle Bin",
      icon: GiTrashCan,
      link: "/recycle-bin",
    },
    {
      name: "Settings",
      icon: AiFillSetting,
      link: "/setting",
    },
    {
      name: "Contact",
      icon: RiContactsFill,
      link: "/contact",
    },
    {
      name: "About",
      icon: FcAbout,
      link: "/about",
    },
  ];

  return (
    <div className="h-screen w-[60px] sm:w-[200px] ">
      <div className="w-[60px] sm:w-[200px] h-screen fixed overflow-hidden bg-[#D4ADFC] border-r-2 overflow-y-auto ">
        <ul className="text-[15px] ">
          {menus.map((menu, index) => {
            const Icon = menu.icon;
            return (
              <li
                className={`cursor-pointer item-menu select-none w-[200px] `}
                key={index}
              >
                <Link
                  to={menu.link}
                  className={`h-[50px] flex items-center justify-start gap-3 ${
                    menu.noteType !== undefined ? "sm:px-10 px-3" : "px-3"
                  }`}
                >
                  <Icon size={20} />
                  <span className="sm:px-0 px-4">{menu.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[50px] sm:w-[200px]"></div>
    </div>
  );
}

export default Menu;
