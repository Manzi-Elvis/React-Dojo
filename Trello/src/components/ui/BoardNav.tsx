import {useParams} from "react-router-dom"
import Colimg from "../../assets/colimg";
import {WhiteBtn} from "../ui/Button"
import { ChevronDown, Plug, CircleUserRound, Star, Zap, ListFilter, UsersRound, Ellipsis } from "lucide-react"
import {Boards} from "../data/boards"
import type {Board} from "../../types/boards"
export default function BoardNav(){
      const rightNav = [CircleUserRound, Plug, Zap, ListFilter, Star, UsersRound, WhiteBtn, Ellipsis]
      const {boardId} = useParams();
      const boards: Board = Boards.find((item) => item.id === boardId)!;
      return(
            <nav className="flex items-center justify-between bg-[#0F3D75] p-3">
                  <div className="flex items-center-safe justify-center gap-6">
                        <h2 className="text-white text-lg font-semibold">{boards.title}</h2>
                        <div className="flex gap-1">
                              <Colimg/>
                              <ChevronDown className="text-white"/>
                        </div>
                  </div>
                  <div className="text-[#FAFBFC] flex font-semibold text-sm ">
                        {rightNav.map((Item) => {
                              return(
                                    <div className="hover:bg-[#5486AE] px-2 rounded-lg flex items-center"><Item size={18}/></div>
                              )
                        })}
                  </div>
            </nav>
      )
}