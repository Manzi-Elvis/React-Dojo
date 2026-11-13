import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp"
export function Recent(){
      const recent = [
            {text:"This Week(12th - 16th Oct)",image: img1},
            {text:"This week(26th - 30th)",image: img2},
            {text:"My Trello Board",image: img3},
            {text:"My Trello",image: img4},
      ];

      return(
            <section className="flex gap-3">
                  <div className="flex flex-wrap gap-4">
                        {recent.map((item) => {
                              return(
                                    <div className="w-52.75 h-27 rounded-lg p-px bg-linear-to-r from-[#1B1B1D] to-[#191A1B]">
                                    <div key={item.text} className="w-full h-full rounded-[7px] overflow-hidden bg-[#1F1F21]">
                                          <img src = {item.image} alt={item.text} className="w-full h-16 object-cover"/>
                                          <p className="p-3 text-sm font-medium">{item.text}</p>
                                    </div>
                                    </div>
                              )
                        })}
                  </div>
            </section>
      )
};

export function Workspace(){
      const workspace = [
            {text:"ElvisManzi",image: img4},
            {text:"This week(26th - 30th)",image: img2},
            {text:"This Week(2nd - 7th Nov)",image: img4},
            {text:"This Week(12th - 16th Oct)",image: img1},
            {text:"This Week(9th - 13th Nov)",image: img4}
      ];
      return(
            <section className="flex gap-3">
                  <div className="flex flex-wrap gap-4">
                        {workspace.map((item) => {
                              return(
                                    <div className="w-52.75 h-27 rounded-lg p-px bg-linear-to-r from-[#1B1B1D] to-[#191A1B]">
                                    <div key={item.text} className="w-full h-full rounded-[7px] overflow-hidden bg-[#1F1F21]">
                                          <img src = {item.image} alt={item.text} className="w-full h-16 object-cover"/>
                                          <p className="p-3 text-sm font-medium">{item.text}</p>
                                    </div>
                                    </div>
                              )
                              
                        })}
                        <div className="bg-[#2C2C2E] w-52.75 h-27 rounded-lg p-px flex flex-col items-center justify-center font-medium text-sm">
                              <p>Create new board</p>
                              <p>0 remaining</p>
                        </div>
                  </div>
            </section>
      )
}