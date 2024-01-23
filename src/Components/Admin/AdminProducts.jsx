import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AdminProduct.module.css";

import { useToast, Wrap, WrapItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, deleteSofa, getSofas } from "../Products/productRedux/productAction";
import { DELETE_REQUEST } from "../Products/productRedux/productActionTypes";
import PlusSignLogo from "../Images/PlusSign.png"
import load from "../Images/loading.gif"


export default function AdminProducts() {
    const { sofas, isLoading } = useSelector(state => state);
    const [sofaData,setSofaData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAddNewClick = () => {
        // Redirect to the form page for adding a new product
        navigate('/admin/addProduct');
    };
    useEffect(() => {
        dispatch(getSofas());
    }, [])
    useEffect(() => {
        setSofaData(sofas);
    },[sofas])
    console.log(sofaData);
    if (isLoading) {
        return (
          <div className={styles.loading}><div><img src={load} alt="Loader" /></div></div>
        )
      }
    return (
        <div className={styles.singleCard}>
            {/* Add a card for adding a new product */}
            <div  onClick={handleAddNewClick}>
                {/* Add */}
                <img src="https://i.pinimg.com/564x/fd/b1/f8/fdb1f843044305c23c26b7a435fb663c.jpg" alt="Add New Product" />
            <div className={styles.nameDiv}>
              <h4 style={{fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large"}}>Add New Product Here</h4>
              {/* <p style={{fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large"}}>New</p> */}
            </div>
            <div className={styles.priceDiv}>
              <p style={{ "marginTop": "0em" }}
              > 
              <Link to={`/admin/product`}
              style={{color: "#AFA9A1",fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large" }}
              ></Link>
               </p>     
              <button onClick={handleAddNewClick} 
              >Add
              </button>
            </div>
                {/* You can use a plus icon or any other indicator here */}
            </div>

            {sofas.map(item => <AdminProductCard item={item} />)}
        </div>
    )
}

const AdminProductCard = ({ item }) => {
    // const state = useSelector(state => state);
    const dispatch = useDispatch();
    // const toast = useToast();
    const select = useSelector(state => state.product);
    const navigate = useNavigate();
    function handleOnDelete(id) {
        alert(`Are you sure , you want to delete this product?`)
        // if(ans==1){
            console.log("deleted",id);
            dispatch( deleteSofa(id))

            dispatch({ type: DELETE_REQUEST,payload:id });
           
        // }
    }
    return (
        <div key={item.id}>
            <img src={item.image} alt="" />
            <div className={styles.nameDiv}>
              <h4 style={{fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large"}}>{item.title}</h4>
              <p style={{fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large"}}>Rs. {item.price}</p>
            </div>
            <div className={styles.priceDiv}>
              <p style={{ "marginTop": "0em" }}
              > 
              <Link to={`/admin/product/${item.id}`}
              style={{color: "#AFA9A1",fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large" }}
              >Edit details</Link>
               </p>     
              <button onClick={() =>handleOnDelete(item.id)} 
              >Delete
              </button>
            </div>
          </div>

    )
};


