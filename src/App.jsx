import { BrowserRouter, Routes, Route } from 'react-router'
import Nav from './components/Nav'
import Login from './components/Login'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} />
          <Route path='/explore' element={<h1>Welcome to explore!</h1>} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
