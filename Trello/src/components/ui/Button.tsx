import {Columns3, User, Settings, BriefcaseBusiness} from "lucide-react"
export default function Button(){
      const button = [
            {label: "Boards" , icon: Columns3},
            {label: "Members" , icon: User},
            {label: "Settings" , icon: Settings},
            {label: "Upgrade" , icon: BriefcaseBusiness, isPurple: true}
      ]
      return(
            button.map((item) => {
                  const Icon = item.icon;
                  return (
                        <div className="flex">
                        <button key={item.label} className={`flex items-center cursor-pointer gap-1 rounded-sm p-1 px-2 font-medium text-sm ${item.isPurple ? "bg-[#35243F] border border-[#2E2932] hover:bg-[#53475C]" : "bg-[#2C2C2E] hover:text-[#505258]"}`}>
                              <Icon className={`font-medium ${item.isPurple? "bg-[#C97CF4] text-black" : ""}`}/>
                              {item.label}
                        </button>
                        </div>
                  )
            })
      )
}