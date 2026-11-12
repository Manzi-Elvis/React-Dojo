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
                                    <div key={item.text} className="w-52.75 h-27 rounded-lg overflow-hidden border-b-gray-600">
                                          <img src = {item.image} alt={item.text} className="w-full h-16 object-cover"/>
                                          <p className="p-3 text-sm font-medium">{item.text}</p>
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
            {text:"This Week(12th - 16th Oct)",image: img1}
      ];
      return(
            <section className="flex gap-3">
                  <div className="flex flex-wrap gap-4">
                        {workspace.map((item) => {
                              return(
                                    <div key={item.text} className="w-50 h-26 rounded-lg overflow-hidden border-b-gray-600">
                                          <img src = {item.image} alt={item.text} className="w-full h-16 object-cover"/>
                                          <p className="p-3 text-sm font-medium">{item.text}</p>
                                    </div>
                              )
                        })}
                  </div>
            </section>
      )
}