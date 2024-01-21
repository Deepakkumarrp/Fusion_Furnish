import { Routes, Route } from "react-router-dom";
import { PaymentDetails } from "./Payment/Payment";

import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";
import HomePage from "./Home/HomePage";
import About from "./About/About";
import AdminProducts from "./Admin/AdminProducts";
import AdminProductDetails from "./Admin/AdminProductDetails";
import AddNewProduct from "./Admin/AddNewProduct";
import Cart from "./CartPage/Cart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export default function AllRoutes(){
    return(<>
    <Routes>
        {/* Rohit add home page below */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Raushan add Login and Sign below */}
        <Route path="/cart" element={<Cart/>}/>

        {/* <Route path="/login"/> */}
        {/* Poornima do edit below if required */}
        <Route path="/payment" element={<PaymentDetails />}/>
       
        {/* Heena do edit if required below */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Admin routes */}
        <Route element={<PrivateRoute />}>
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/product/:id" element={<AdminProductDetails />} />
        <Route path="/admin/addProduct" element={<AddNewProduct />} />
        </Route>
    </Routes>
    </>);
}