import {Clock} from "lucide-react"
import {Recent, Workspace} from "./ui/box"
import TrelloSign from "./ui/trelloSign"
import Button from "./ui/Button"
export default function Dashboard(){
      return(
            <section className="bg-[#1F1F21] text-[#A9ABAF] h-full pl-8 flex flex-col gap-8">
                  <div className="flex flex-col gap-5">
                        <p className="flex gap-2 pt-8 font-bold text-lg items-center">
                              <Clock/> Recently viewed
                        </p>
                        <Recent />
                  </div>
                  <div>
                        <h2 className="font-bold">YOUR WORKSPACES</h2>
                  </div>
                  <div className="flex justify-between px-12">
                        <TrelloSign/>
                        <div className="flex gap-3">
                              <Button/>
                        </div>
                  </div>
                  <div>
                        <Workspace />
                  </div>
            </section>
      )
}