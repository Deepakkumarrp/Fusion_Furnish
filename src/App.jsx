import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
import Products from './Components/Products/Products'

function App() {
  return (
    <ChakraProvider>
     <Products/>
     </ChakraProvider>
  )
}

export default App
