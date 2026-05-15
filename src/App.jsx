import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Account from './pages/Account'
import Auth from './pages/Auth'
import Explore from './pages/Explore'
import Index from './pages/Index'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/account' element={<Account />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='/explore' element={<Explore />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
