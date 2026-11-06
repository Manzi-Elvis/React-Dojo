import {Search, PanelLeft, X, Filter, Clock, GraduationCap, Ellipsis, Plus, SquarePen, Settings, LayoutGrid, Images} from "lucide-react";

interface SidebarProps {
      isOpen: boolean;
      onClose : () => void;
}

const Sidebar = ( {isOpen, onClose}: SidebarProps) => {
      const navigation = [
            {label: "NewChat", icon: SquarePen, active: true},
            {label: "Library", icon: LayoutGrid},
            {label: "Images", icon: Images},
            {label: "Scheduled", icon: Clock},
            {label: "Students", icon: GraduationCap},
            {label: "More", icon: Ellipsis},
      ];
      return (
      <>
      {isOpen && (
            <div onClick={onClose} className="fixed inset-0 z-40 bg-black/60 lg:hidden"/>
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-75 flex-col bg-[#1f1f1f] text-[#e3e3e3] transition-transform duration-300 lg:static lg:z-auto lg:w-75 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex h-16.25 items-center justify-between px-5">
                  <div className="flex items-center gap-3">
                        <img src="/public/favicon.svg" className="w-8"/>
                        <span className="text-[23px] font-semibold tracking-tight">Gemini</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#aaa]">
                        <Search size={21} className="cursor-pointer hover:text-white" />
                        <PanelLeft size={21} className="hidden cursor-pointer hover:text-white lg:block"/>
                        <button onClick={onClose} className="lg:hidden">
                              <X size={22}/>
                        </button>
                  </div>
            </div>
            <nav className="mt-2 flex flex-col px-2">
                  {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                              <button key={item.label} onClick={onClose} className = {`flex h-11 items-center gap-5 rounded-full px-3.25 text-left text-[16px] font-medium transition-colors ${item.active ? "bg-[#171717] text-white" : "hover:bg-[#2a2a2a] text-[#dedede]"}`}>
                                    <Icon size={21} strokeWidth={2}/>
                                    {item.label}
                              </button>
                        )
                  })}
            </nav>

            <div className="mt-6 px-5.5">
                  <p className="mb-3 text-[16px] font-medium text-[#999]">Notebooks</p>
                  <button className="flex h-10.5 items-center gap-5 text-[16px] font-medium hover:text-white">
                        <Plus size={24}/>
                        New Notebook
                  </button>
            </div>
            <div className="mt-6 flex-1 overflow-y-auto px-5.5">
                  <div className="mb-4 flex items-center justify-between">
                        <span className="text-[16px] font-medium text-[#999]">All</span>
                        <Filter size={19} className="cursor-pointer text-[#999]" />
                  </div>
                  <button className="w-full truncate text-left text-[15px] font-medium hover:text-white">General Assistance Offer</button>
            </div>
            <div className="flex h-19 items-center justify-between px-4.75">
                  <div className="flex min-w-0 items-center gap-3">
                        <div className="flex w-9.5 h-9.5 shrink-0 items-center justify-center rounded-full bg-[#777] text-sm font-bold text-white">M</div>
                        <span className="truncate text-[16px] font-medium">MANZI RURANGIRWA Elvis</span>
                  </div>
                  <button className="ml-2 shrink-0 text-[#ccc] hover:text-white">
                        <Settings size={22}/>
                  </button>
            </div>
      </aside>
      </>
      )
}

export default Sidebar;