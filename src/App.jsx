import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import Auth from './components/Auth'
import Account from './components/Account'
import Scroll from './components/Scroll'
import './App.css'
import Nav from "./components/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/account' element={<Account/>}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/' element={
              <>
                  <Nav />
                  <Scroll />
              </>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
