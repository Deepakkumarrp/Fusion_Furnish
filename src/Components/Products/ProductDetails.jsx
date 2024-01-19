import { useEffect } from "react";
import { getSofas } from "./productRedux/productAction";
import { useDispatch } from "react-redux";

export default function Products(){
    const dispatch = useDispatch();
useEffect(()=>{
dispatch(getSofas);
},[])
}