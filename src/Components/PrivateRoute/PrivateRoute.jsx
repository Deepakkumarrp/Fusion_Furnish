import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(){
    const {isAdmin} = useSelector(state => state.isAdmin);
    return isAdmin ? <Outlet /> : <Navigate to= '/'/> ;
}