import React from 'react'
import { useDispatch } from "react-redux";
import "./CartElement.css";
import { increaseQty, decreaseQty, removeFromCart, cleanCart } from '../../Products/productRedux/productAction';



function CartElement({ id, name, seller, image, price, discount, quantity }) {
    console.log(name, seller, image, price, discount);
    const discountPrice = price * quantity - price * quantity * (discount / 100);
    const dispatch = useDispatch();
  return (
    <div className="mainCartElement">
      <div id="cartElementContainer">
        <div>
          <img src={image} width={130} height={130} style={{ borderRadius: "5px" }} />
        </div>
        <div>
          <p className="productName">{name}</p>
          <p className="productDetails">Black, DIY(Do-It-Yourself)</p>
          <p className="sellerName">Seller:{seller}</p>
          <div id="elementPrice">
            <span className="beforePrice">₹{price * quantity}</span>
            <span className="currentPrice">₹{discountPrice.toFixed(0)}</span>
            <span className="discount">{discount}% Off</span>
          </div>
        </div>
      </div>
      <div id="quantityContainer">
        <div className="quantity-control">
          <button
            className="decrement"
            disabled={quantity == 1}
            onClick={() => {
              dispatch(decreaseQty(id));
            }}
          >
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button
            className="increment"
            onClick={() => {
              dispatch(increaseQty(id));
            }}
          >
            +
          </button>
        </div>
        <div id="removeBtn">
          {/* <button
          onClick={() => {
            dispatch(cleanCart(id));
          }}
          >SAVE FOR LATER</button> */}
          <button
            onClick={() => {
              dispatch(removeFromCart(id));
            }}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartElement