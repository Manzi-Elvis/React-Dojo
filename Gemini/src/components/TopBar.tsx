import {Download, Menu, MoreHorizontal, Sparkles} from "lucide-react";

interface TopBarProps {
      onMenuClick: () => void;
}

const TopBar = ({onMenuClick} : TopBarProps) => {
      return (
            <header className="flex h-[85px] items-center justify-between px-5 sm:px-8 lg:px-10">
                  <button onClick = {onMenuClick} className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden">
                        <Menu size={23}/>
                  </button>
                  <div className="ml-auto flex items-center gap-3 sm:gap-4">
                        <button className="flex h-[48px] items-center gap-3 rounded-full bg-[#1c1c1c] px-4 text-[15px] font-medium text-white transition hover:bg-[#303030] sm:px-5">
                              <Download size={19}/>
                              <span className="hidden sm:inline">Get App</span>
                        </button>
                        <button className="flex h-[48px] items-center gap-3 rounded-full bg-[#3048c6] px-4 text-[15px] font-medium text-white transition hover:bg-[#4059df] sm:px-5">
                              <Sparkles size={20} fill="white" />Upgrade
                        </button>
                        <button className="hidden rounded-full p-2 text-white hover:bg-white/10 sm:block">
                              <MoreHorizontal size={23}/>
                        </button>
                  </div>
            </header>
      )
}
export default TopBar