import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { store } from "../Products/productRedux/productStore";

export default function PrivateRoute(){
    const isAdmin = useSelector(store => store.isAdmin)
    // console.log(isAdmin,"from PrivatePage")
    return isAdmin ? <Outlet /> : <Navigate to= '/'/> ;
}