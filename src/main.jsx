import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Components/Products/productRedux/productStore.js'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </ChakraProvider>
)
