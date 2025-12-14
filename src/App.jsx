import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/cart'
import Providers from './redux/providers'

function App() {
  return (
    <>
    <div className='app'>
      <Providers>
        <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/cart' element={<Cart></Cart>} ></Route>
        </Routes>
      </Providers>
    </div>
    </>
  )
}

export default App
