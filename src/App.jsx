import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Auth from './components/Auth'
import User from './components/User.jsx'
import Scroll from './components/Scroll'
import Nav from './components/Nav'
import './App.css'
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/account' element={<User />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/' element={
              <>
                  <Nav />
                  <Scroll />
              </>

          } />
            <Route path='/home' element={<Hero />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
