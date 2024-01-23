import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Products/products.module.css";
import { useToast, Wrap, WrapItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, getSofas } from "./productRedux/productAction";
import load from "../Images/loading.gif"

export default function Products() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSofas());
    }, [])
    const { sofas, isLoading } = useSelector(state => state);
    console.log(isLoading);
    // Adding loader
    if (isLoading) {
        return (
          <div className={styles.loading}><div><img src={load} alt="Loader" /></div></div>
        )
      }
    return (
        <div className={styles.singleCard}>
            {sofas.map(item => <ProductCard item={item} />)}
        </div>
    )
}

const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const toast = useToast();
    const select = useSelector(state => state.product);
    const navigate = useNavigate();
    function handleClick(ele) {
        addToCart({ ...ele, qty: 1 },dispatch);
        console.log(select);
        <Wrap>
            <WrapItem key={item.id}>
                {toast({

                    status: "success",
                    isClosable: true,
                    variant: "solid",
                    duration: 2000,
                    render: () => (
                        <div style={{ backgroundColor: "#7D777C", padding: "10px", color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                          ✔️ Added to Cart!
                        </div>
                    )
                })
                }
            </WrapItem>
        </Wrap>
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
              <Link to={`/product/${item.id}`}
              style={{color: "#AFA9A1",fontFamily:" sans-serif", fontWeight:"bold",fontSize:"large" }}
              >More details</Link>
               </p>     
              <button onClick={() => handleClick(item)}
              >Add to Cart
              </button>
            </div>
          </div>

    )
};


