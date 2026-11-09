import {LayoutGrid, Megaphone, Bell} from "lucide-react";
import logo from "/public/favicon.svg";
export default function NavBar(){
      return(
            <nav className="flex">
                  <div>
                        <LayoutGrid size={19}/>
                        <img src={logo} alt="" />
                  </div>
                  <div>
                        <form action=""></form>
                        <button></button>
                  </div>
                  <div>
                        <Megaphone />
                        <Bell/>
                        <div></div>
                  </div>
            </nav>
      )
}