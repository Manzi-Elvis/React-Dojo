import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function Home() {
  return <main> Home Page</main>
}

function Discover() {
  return <main> Discover Movies</main>
}

function Watchlist() {
  return <main> Your Watchlist</main>
}

function SearchPage() {
  return <main> Search Movies</main>
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/discover' element={<Discover />}/>
        <Route path='/watchlist' element={<Watchlist />}/>
        <Route path='/search' element={<SearchPage />}/>
      </Routes >
    </BrowserRouter>
  )
}