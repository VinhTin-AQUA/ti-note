import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <>
      <div className="z-10 fixed bg-indigo-950 w-full h-[70px] flex items-center justify-between">
        <div>
          <img
            className="max-h-[55px] px-1 rounded-full"
            src="/logo.png"
            alt="logo"
          />
        </div>

        <div className="flex items-center px-4">
          <FiSearch size={25} className="relative left-8 md:left-10" />
          <input
            className="md:w-[500px] md:mx-1 px-8 py-2 pl-10 rounded-full outline-none search"
            type="text"
            placeholder="search..."
            spellCheck={false}
          />
        </div>
      </div>
      <div className="h-[70px]"></div>
    </>
  );
}

export default Header;
