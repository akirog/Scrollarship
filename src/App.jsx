import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path='/explore' element={<h1>Welcome to explore!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
