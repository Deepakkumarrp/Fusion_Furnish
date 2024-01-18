import Cart from './Components/CartPage/Cart'
import Login from './Components/UserLogin/Login'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const{isAuthenticated} = useAuth0();
  return (
    <>
      <Login/>
      {isAuthenticated && (
        <Cart/>
      )}
      
    </>
  )
}

export default App
