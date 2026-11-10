import {Columns3, Activity, StickyNotePlus} from "lucide-react";

export default function Sidebar(){
      const navigation = [
            {name: "Boards", icon: Columns3, isActive: true},
            {name: "Templates", icon: StickyNotePlus},
            {name: "Home", icon: Activity}
      ]
      return(
            <aside className="w-80 h-screen bg-[#1F1F21] text-[#A9ABAF] pt-8">
                  <div className=" flex flex-col justify-center gap-1 py-4">
                        {navigation.map((item) => {
                              const Icon = item.icon;
                              return (
                                    <button key={item.name} className={`flex items-center gap-2 font-medium text-sm px-4 mx-4 ${item.isActive ? "bg-[#172b4d] text-[#669DF1] py-2 rounded-lg" : "hover:bg-[#333538] py-2 rounded-lg"}`}>
                                          <Icon size={14}/>
                                          {item.name}
                                    </button>
                              )
                        })}
                  </div>
                  <div></div>
                  <div></div>
            </aside>
      )
}