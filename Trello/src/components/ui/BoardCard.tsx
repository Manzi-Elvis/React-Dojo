import {Link} from "react-router-dom";
import type {Board} from '../../types/boards';

interface BoardCardProps {
      board: Board
}

export default function BoardCard({board} : BoardCardProps){
      return(
            <Link to={`/boards/${board.id}`}>
                  <div className="rounded-xl overflow-hidden" style={{backgroundImage : `url(${board.background})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className="h-28">
                              <div className="bg-black/50 p-3 text-white">{board.title}</div>
                        </div>
                  </div>
            </Link>
      )
}