import {useParams} from "react-router-dom";
import {Boards} from "../data/boards"
import BoardNav from "../ui/BoardNav"
export default function BoardPage(){
      const { boardId } = useParams<{boardId: string}>();
      const board = Boards.find((b) => b.id === boardId)
      if(!board) return <h1>Board Not Found!!!!!!</h1>
      return(
            <div className="min-h-screen bg-cover bg-center" style={{backgroundImage : `url(${board.background})`}}>
                  
                  <BoardNav />
                  
                  <div className="flex gap-4 p-4 overflow-x-auto">
                        {board.lists.map((list) => (
                              <div key={list.id} className="bg-[#101204] rounded-xl p-4 min-w-64">
                                    <h2 className="text-white font-semibold mb-4">{list.title}</h2>
                                    {list.cards.map((card, index) => (
                                          <div key={index} className="bg-zinc-800 text-white p-3 rounded-lg mb-2">{card}</div>
                                    ))}
                              </div>
                        ))}
                  </div>
            </div>
      )
}