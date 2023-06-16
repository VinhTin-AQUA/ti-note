import Header from "../../Header";
import Menu from "../../Menu";

function Default({ children }) {
  return (
    <div className="w-full h-[100%] ">
      <Header />
      <div className="flex w-full h-[100%]">
        <Menu />
        {children}
      </div>
    </div>
  );
}

export default Default;
