import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Account from './components/Account'
import Auth from './components/Auth'
import Explore from './components/Explore'
import Index from './components/Index'
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
