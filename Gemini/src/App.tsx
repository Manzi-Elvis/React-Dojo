import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import './index.css'
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import WelcomeScreen from "./components/WelcomeScreen"

export default function App() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
      return (
            <BrowserRouter>
                  <div className="flex min-h-screen overflow-hidden bg-[#0e0f13] text-white">
                        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                        <main className="relative flex min-w-0 flex-1 flex-col overflow-y-auto bg-[radial-gradient(ellipse_75%_65%_at_55%_55%,rgba(37,55,140,0.65)_0%,rgba(23,33,83,0.5)_42%,#0e0f13_100%)]">
                              <TopBar onMenuClick={() => setSidebarOpen(true)}/>
                              <Routes>
                                    <Route path="/" element={<WelcomeScreen />}/>      
                              </Routes>      
                        </main>
                  </div>
            </BrowserRouter>
      )
}