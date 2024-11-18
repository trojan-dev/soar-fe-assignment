import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
export default function Header() {
  const pageName = useSelector((state: RootState) => state.app.pageName);
  return (
    <header className="bg-white shadow-md p-6 flex justify-between items-center global-header">
      <h1 className="font-semibold text-2xl text-[#343C6A]">{pageName}</h1>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex p-3 rounded-full bg-[#F5F7FA] global-search gap-2">
          <img src="/assets/search.svg" />
          <input
            className="border-none outline-none bg-transparent"
            type="text"
            placeholder="Search for something"
          ></input>
        </div>
        <button className="hidden md:flex">
          <img src="/assets/settings-header.svg" />
        </button>
        <button className="hidden md:flex">
          <img src="/assets/notification.svg" />
        </button>
        <img
          src="/assets/avatar.svg"
          className="rounded-full w-12 cursor-pointer"
        />
      </div>
    </header>
  );
}
