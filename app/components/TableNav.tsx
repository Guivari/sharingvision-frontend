'use client';

type Tab = "published" | "draft" | "trashed";

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function TableNav({ activeTab, setActiveTab }: NavbarProps) {
  const tabs: Tab[] = ["published", "draft", "trashed"];

  return (
    <div className="navbar p-0 bg-gray-800 rounded-t-2xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`btn btn-ghost text-xl min-h-[4rem] rounded-t-2xl rounded-b-none capitalize ${
            activeTab === tab ? "bg-gray-700 text-white" : "bg-gray-800 text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}