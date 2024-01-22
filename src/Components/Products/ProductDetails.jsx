import { useEffect, useState } from "react";
import { addToCart, getSofas, getsingleSofa } from "./productRedux/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../Products/productDetails.module.css";
export default function ProductDetails() {
    const dispatch = useDispatch();
    const {id} = useParams();
    // const state = useSelector(state => state.product);

    // console.log(state);
    const {sofa} = useSelector(state=>state);
    useEffect(() => {
        dispatch(getsingleSofa(id));
    }, [id])

    return (
        <div>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.left}>
              <div>
                <img src={sofa.image} />
              </div>
              <div className={styles.leftDown}>
                <div>
                  <img src={sofa.url1} />
                </div>
                <div>
  
                  <img src={sofa.url2} />
                </div>
              </div>
              <div className={styles.description}>
                <h2 style={{fontFamily:"sans-serif"}}>Specification:-</h2>
                <p>Elevate your space with our sleek and modern {sofa.title}. {sofa.title} is meticulously crafted to seamlessly blend style and functionality, creating a contemporary aesthetic that complements any decor.</p>
                <p>Our {sofa.type} are created with your relaxation in mind, offering a perfect balance of style and coziness.</p>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <h1>{sofa.title}</h1>
              </div>
              <div>
                <p> {sofa.type} {" >"} </p>
                <h2>Price:- Rs. {sofa.price}</h2>
              </div>
              <div>
                <p>Fabric texture and color:</p>
                <div className={styles.fabric}><img src="https://api.woodfans.ru/storage/uploads/images/kn8iLsymSOppqND13mAoHryqp0tODnZzhp53hIJO_cropped_2013_753.webp" /></div>
              </div>
              <div>
                <p>Select size:</p>
                <div className={styles.select}>
                  <select className={styles.custom_arrow}>
                    <option>Big</option>
                    <option>Average</option>
                    <option>Small</option>
                  </select>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Softness of {sofa.type} cushions:</p>
                <select className={styles.custom_arrow}>
                  <option>Tough</option>
                  <option>Average</option>
                  <option>Soft</option>
                </select>
              </div>
              <div>
                <button className={styles.submit} onClick={() => {addToCart({ ...sofa, qty: 1 },dispatch)}}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


