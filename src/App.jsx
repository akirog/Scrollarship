import { BrowserRouter, Routes, Route } from 'react-router'
import Nav from './components/Nav'
import Auth from './components/Auth'
import Account from './components/Account'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Nav />
          }/>
          <Route path='/explore' element={<h1>Welcome to explore!</h1>} />
          <Route path='/account' element={<Account/>}/>
          <Route path='/auth' element={
            <>
            <Nav />
            <div className='auth'>
              <div className='authContainer'>
                <Auth />
              </div>
            </div>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
