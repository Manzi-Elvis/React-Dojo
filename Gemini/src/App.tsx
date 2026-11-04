import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import Navbar from "./components/Navbar";

export default function App() {
      return (
            <div className="bg-black">
                  <BrowserRouter>
                        <Navbar />
                        <Routes>
                              <Route path='/' element = ''/>
                        </Routes>
                  </BrowserRouter>
            </div>
      )
}