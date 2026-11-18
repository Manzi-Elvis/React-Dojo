import NavBar from "./components/NavBar"
import Sidebar from "./components/SideBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Board from "./components/layouts/Board"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <div className="flex">
          <Sidebar/>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path = "/" element = {<Board/>}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
