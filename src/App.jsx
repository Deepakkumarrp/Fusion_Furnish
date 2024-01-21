import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// import './App.css'
import Products from './Components/Products/Products'
import { Routes } from 'react-router-dom'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div style={{height:"120px"}}></div>
      <AllRoutes />
      <Footer />
    </>
  )
}



export default App
