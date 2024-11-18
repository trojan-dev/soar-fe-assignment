import { useState } from "react";
import EditProfile from "./EditProfile";
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const tabs = [
    { name: "Edit Profile" },
    { name: "Preferences" },
    { name: "Security" },
  ];

  return (
    <>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300 ${
              activeTab === tab.name
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {activeTab === "Edit Profile" && <EditProfile />}
    </>
  );
}
