import {
  Columns3,
  Activity,
  StickyNotePlus,
  ChevronDown,
  ChevronUp,
  UsersRound,
  Plus,
  Settings,
  BriefcaseBusiness,
} from "lucide-react";
import TrelloSign from "./ui/trelloSign";
import { useState } from "react";

export default function Sidebar() {
  const navigation = [
    { name: "Boards", icon: Columns3, isActive: true },
    { name: "Templates", icon: StickyNotePlus },
    { name: "Home", icon: Activity },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="w-80 h-[calc(100vh-48px)] bg-[#1F1F21] text-[#A9ABAF] pt-8">
      <div className=" flex flex-col justify-center gap-1 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              className={`flex items-center gap-2 font-medium text-sm px-4 mx-4 ${item.isActive ? "bg-[#172b4d] text-[#669DF1] py-2 rounded-lg" : "hover:bg-[#333538] py-2 rounded-lg"}`}
            >
              <Icon size={14} />
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="border border-white/6 mx-6"></div>
      <div className="mx-8 mt-5">
        <p className="font-medium text-sm">Workspaces</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex items-center gap-20 hover:bg-[#333538] py-2 px-2 rounded-lg"
        >
          <TrelloSign />
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* Workspace Content */}
        {isOpen && (
          <div className="mt-1 flex flex-col gap-1">
            {/* Boards */}
            <button className="flex items-center gap-3 pl-11 pr-4 py-2 rounded-lg bg-[#1E2F4E] text-[#669DF1] text-sm font-medium">
              <Columns3 size={14} />
              Boards
            </button>

            {/* Members */}
            <div className="flex items-center justify-between px-0 pl-11 pr-4 py-2 rounded-lg hover:bg-[#333538]">
              <button className="flex items-center gap-3 text-sm font-medium">
                <UsersRound size={14} />
                Members
              </button>

              <button
                className="hover:bg-[#444649] rounded-md p-1"
                aria-label="Add member"
              >
                <Plus size={17} />
              </button>
            </div>

            {/* Settings */}
            <button className="flex items-center gap-3 pl-11 pr-4 py-2 rounded-lg hover:bg-[#333538] text-sm font-medium">
              <Settings size={14} />
              Settings
            </button>

            {/* Upgrade Card */}
            <div className="relative mt-1 mx-0 p-4 rounded-md bg-[#242426] border border-white/4">
              <h3 className="text-sm font-semibold text-[#C9CACD]">
                Upgrade this Workspace
              </h3>

              <p className="text-sm leading-5 text-[#A9ABAF] mt-2">
                Get unlimited boards, advanced automation, Planner (full
                access), collapsible lists, AI, and more!
              </p>

              <button className="text-sm underline mt-3 text-[#A9ABAF] hover:text-white">
                Upgrade
              </button>

              {/* Purple Upgrade Icon */}
              <div className="absolute bottom-2 right-2 w-7 h-7 rounded-lg bg-[#C66BE7] flex items-center justify-center text-[#28202D]">
                <BriefcaseBusiness size={18} />
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
