import Navbar from "../NavBar"
import {Outlet} from "react-router-dom"
export default function MainLayout(){
      return(
            <>
            <Navbar/>
            <main>
                  <Outlet/>
            </main>
            </>
      )
}