import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import Sidebar from "./components/Sidebar";

export default function App() {
      return (
            <>
                  <BrowserRouter>
                        <Sidebar />
                        <Routes>
                              <Route path='/' element = {<h1>GEMINI</h1>}/>
                        </Routes>
                  </BrowserRouter>
            </>
      )
}