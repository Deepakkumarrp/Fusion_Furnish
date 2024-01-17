import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Paymentdetails } from './Components/Payment/Payment'
import { AddressDetails } from './Components/Payment/Address'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <AddressDetails/>
<Paymentdetails/>

      </div>
    </>
  )
}

export default App
