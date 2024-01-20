import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { AddressDetails } from './Components/Payment/Address'
// import './App.css'
import Products from './Components/Products/Products'
import AllRoutes from './Components/AllRoutes'
// import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    {/* <AddressDetails /> */}
      {/* <Paymentdetails/> */}
      <Products />
      {/* <Navbar /> */}
      <AllRoutes />
      {/* <Footer /> */}
    </>
  )
}



export default App
