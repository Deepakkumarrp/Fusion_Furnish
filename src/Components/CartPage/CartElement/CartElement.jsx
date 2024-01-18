import React from 'react'
import "./CartElement.css"

export const CartElement = () => {
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
            dispatch(decreaseQty(name));
          }}
        >
          -
        </button>
        <div className="quantity">{quantity}</div>
        <button
          className="increment"
          onClick={() => {
            dispatch(increaseQty(name));
          }}
        >
          +
        </button>
      </div>
      <div id="removeBtn">
        <button>SAVE FOR LATER</button>
        <button
          onClick={() => {
            dispatch(removeFromCart(name));
          }}
        >
          REMOVE
        </button>
      </div>
    </div>
  </div>
  )
}
