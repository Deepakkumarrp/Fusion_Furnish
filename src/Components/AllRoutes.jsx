import { Routes, Route } from "react-router-dom";
import { PaymentDetails } from "./Payment/Payment";

import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";


export default function AllRoutes(){
    return(<>
    <Routes>
        {/* Rohit add home page below */}
        <Route path="/"  />
        {/* Raushan add Login and Sign below */}


        {/* <Route path="/login"/> */}
        {/* Poornima do edit below if required */}
        <Route path="/payment" element={<PaymentDetails />}/>
       
        {/* Heena do edit if required below */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </>);
}