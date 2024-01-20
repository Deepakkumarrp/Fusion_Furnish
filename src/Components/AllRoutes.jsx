import { Routes, Route } from "react-router-dom";
import { Paymentdetails } from "./Payment/Payment";
import { AddressDetails } from "./Payment/Address";
import Products from "./Products/Products";


export default function AllRoutes(){
    return(<>
    <Routes>
        {/* Rohit add home page below */}
        <Route path="/"  />
        {/* Raushan add Login and Sign below */}
        {/* Poornima do edit below if required */}
        <Route path="/payment" element={<Paymentdetails />}/>
        <Route path="/address" element={<AddressDetails />} />
        {/* Heena do edit if required below */}
        <Route path="/products" element={<Products />} />
    </Routes>
    </>);
}