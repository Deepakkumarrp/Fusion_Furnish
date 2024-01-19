import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Paymentdetails } from './Components/Payment/Payment'
import { AddressDetails } from './Components/Payment/Address'
import Cart from './Components/CartPage/Cart'
import Login from './Components/UserLogin/Login'
import { useAuth0 } from "@auth0/auth0-react";
import { CartElement } from './Components/CartPage/CartElement/CartElement'

function App() {
  
  const { isAuthenticated } = useAuth0();
  return (
    <>
      
      {/* <div> */}
        {/* <AddressDetails /> */}
        {/* <Paymentdetails /> */}

      {/* </div> */}
      <Login />
      {/* {isAuthenticated && (
        // <Cart />
      )} */}
      {/* <CartElement/> */}

    </>
  )
}

export default App
