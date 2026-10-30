import {Search, Moon, Sun,Compass, Bookmark, Clapperboard, Menu, X,} from 'lucide-react';
import {NavLink, useNavigate} from "react-router-dom";
import {useState, useEffect } from "react"
const navLinks = [
      {name: "Home", path: "/", icon: null},
      {name: "Discover", path: "/discover", icon: Compass},
      {name: "Watchlist", path: "/watchlist", icon: Bookmark}
]
export default function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
      const [isLight, setIsLight] = useState(() => {
            if(typeof window === undefined) return false;
            return localStorage.getItem("cinevault-theme") === "light";
      })
      const navigate = useNavigate();

      useEffect(() => {
            document.documentElement.classList.toggle('light', isLight)
            localStorage.setItem("cinevault-theme", isLight? "light" : "dark")
      }, [isLight]);

      useEffect(() => {
            setMenuOpen(false)
      }, [navigate]);

      const linkClasses = ({isActive} : {isActive: boolean}) => `rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-violet-500/10 text-violet-400" : "text-slate-400 hover:bg-white/5 hover:text-white"}`
      return (
      <header className = {`sticky top-0 z-50 border-b backdrop-blur-xl ${isLight ? "border-slate-200 bg-white/85" : "border-white/[0.07] bg-[#090b12]/85"}`}>
            <nav aria-label='Main navigation' className = 'mx-auto flex h-19 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-10'>
                  <NavLink to = "/" aria-label='Home' className='group flex shrink-0 items-center gap-3' onClick={() => setMenuOpen(false)}>
                       <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20 transition-transform group-hover:scale-105">
                              <Clapperboard size={23} className='text-white' />
                       </span>
                       <span className='flex flex-col'>
                              <span className={`font-['Space_Grotesk'] text-xl font-bold tracking-light ${isLight ? "text-slate-900" : "text-white"}`}>
                                    CINE<span className='text-violet-400'>VAULT</span>
                              </span>
                              <span className='hidden text-[9px] font-semibold tracking-[0.19em] text-slate-500 sm:block'>
                                    DISCOVER YOUR NEXT OBSESSION
                              </span>
                       </span>
                  </NavLink>
                  <div className='hidden items-center gap-1 md:flex'>
                        {navLinks.map((link) => (
                              <NavLink key={link.path} to={link.path} end={link.path === "/"} className = {({isActive}) => `${linkClasses({isActive})} ${isLight && !isActive ? "text-slate-600 hover:text-slate-950" : ""}`}>{link.name}</NavLink>
                        ))}
                  </div>
                  <div className='hidden items-center gap-2 md:flex'>
                        <button type='button' onClick={() => navigate("/search")} aria-label='Search movies' className={`flex h-10 w-10 items-center justify-center rounded-xl border transitions ${isLight ? "border-slate-200 text-slate-600 hover:border-violet-400 hover:text-violet-600" : "border-white/10 text-slate-300 hover:border-slate-400/50 hover:text-violet-400"} `}>
                              <Search size = {19} />
                        </button>
                        <button type='button' onClick={() => setIsLight((curr) => !curr)} aria-label={`Switch to ${isLight ? "dark" : "light"} theme`} className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${ isLight ? "border-slate-200 text-slate-600 hover:text-violet-600" : "border-white/10 text-slate-300 hover:text-violet-400"}`}>
                              {isLight ? <Moon size={19}/> : <Sun size={19} />}
                        </button>
                  </div>
                  <div className='flex items-center gap-2 md:hidden'>
                        <button type='button' onClick={() => navigate("/search")} aria-label='Search Movies' className={`flex h-10 w-10 items-center justify-center rounded-xl ${isLight ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-white/5"}`}>
                              <Search size={20} />
                        </button>
                        <button type='button' onClick={() => setIsLight((curr) => !curr)} aria-label='Toggle color theme' className={`flex h-10 w-10 items-center justify-center rounded-xl ${isLight ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-white/5"}`}>
                              {isLight ? <Moon size={19}/> : <Sun size={19}/>}
                        </button>
                        <button type='button' onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close Menu" : "Open Menu"} className={`flex h-10 w-10 items-center justify-center rounded-xl ${ isLight ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-white/5"}`}>
                              {menuOpen ? <X size={22}/> : <Menu size={22}/>}
                        </button>
                  </div>
            </nav>
            {menuOpen && (
                  <div id='mobile-navigation' className={`border-t px-4 pb-5 pt:3 md:hidden ${ isLight ? "border-slate-200 bg-white" : "border-white/[0.07] bg-[#0d1019]"}`}>
                        <div className='mx-auto flex max-w-360 flex-col gap-2'>
                              {navLinks.map((link) => {
                                    const Icon = link.icon
                                    return (
                                          <NavLink key={link.path} to={link.path} end={link.path === "/"} onClick={() => setMenuOpen(false)} className={({isActive}) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-violet-500/10 text-violet-400" : isLight ? "text-slate-600 hover:bg-slate-100" : "text-slate-300 hover:bg-white/5"}`}>
                                                {Icon ? <Icon size={18}/> : null}
                                                {link.name}
                                          </NavLink>
                                    )
                              })}
                        </div>
                  </div>)}
      </header>
      )
}