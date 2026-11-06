import {Download, Menu, MoreHorizontal} from "lucide-react";

interface TopBarProps {
      onMenuClick: () => void;
}

const TopBar = ({onMenuClick} : TopBarProps) => {
      return (
            <header className="flex h-14 items-center justify-between px-2 sm:px-8 lg:px-10">
                  <button onClick = {onMenuClick} className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden">
                        <Menu size={23}/>
                  </button>
                  <div className="ml-auto flex items-center gap-2 sm:gap-2">
                        <button className="flex h-9 items-center gap-1 rounded-full bg-[#1c1c1c] px-2 text-[13px] font-semibold text-white transition hover:bg-[#303030] sm:px-5">
                              <Download size={13}/>
                              <span className="hidden sm:inline">Get app</span>
                        </button>
                        <button className="relative flex h-9 items-center gap-1 rounded-full bg-[#3048c6] px-2 text-[15px] font-medium text-white transition hover:bg-[#4059df] sm:px-2">
                              <img src="/public/gemini-icon.svg" className="w-4"/>Upgrade
                        </button>
                        <button className="hidden rounded-full p-2 text-white hover:bg-white/10 sm:block">
                              <MoreHorizontal size={23}/>
                        </button>
                  </div>
            </header>
      )
}
export default TopBar;