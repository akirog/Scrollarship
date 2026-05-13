import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Auth from './components/Auth'
import Scroll from './components/Scroll'
import Account from './components/Account'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/account' element={<Account />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/' element={<Scroll />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
