import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageName } from "../../../store/slice/appSlice";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState("overview");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 h-screen w-64 hidden lg:block">
      <div className="p-6 flex items-center gap-2">
        <img src="/assets/header-icon.svg" />
        <h1 className="text-2xl font-bold text-blue-[#343C6A]">Soar Task</h1>
      </div>
      <nav className="mt-6 space-y-4 side-navigation">
        <span
          onClick={() => {
            navigate("/");
            dispatch(setPageName("Overview"));
            setActiveLink("overview");
          }}
          className={`flex items-center px-6 py-2 ${
            activeLink === "overview" ? "text-gray-900 active" : "text-gray-400"
          }  font-medium`}
        >
          <img
            className={`${activeLink === "overview" ? "invert" : "invert-0"}`}
            src="/assets/dashboard.svg"
          />
          <span className="ml-3">Dashboard</span>
        </span>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/transfer.svg" />
          <span className="ml-3">Transactions</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/accounts.svg" />
          <span className="ml-3">Accounts</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/economic-investment.svg" />
          <span className="ml-3">Investments</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/credit-card.svg" />
          <span className="ml-3">Credit Cards</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/loan.svg" />
          <span className="ml-3">Loans</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/services.svg" />
          <span className="ml-3">Services</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-400">
          <img src="/assets/econometrics.svg" />
          <span className="ml-3">My Privileges</span>
        </a>
        <span
          onClick={() => {
            navigate("/settings");
            dispatch(setPageName("Settings"));
            setActiveLink("settings");
          }}
          className={`flex items-center px-6 py-2 ${
            activeLink === "settings" ? "text-gray-900 active" : "text-gray-400"
          }`}
        >
          <img
            src="/assets/settings.svg"
            className={`${activeLink === "settings" ? "invert" : "invert-0"}`}
          />
          <span className="ml-3">Settings</span>
        </span>
      </nav>
    </aside>
  );
}
