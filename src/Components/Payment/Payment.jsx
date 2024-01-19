import React from "react";

export  const Paymentdetails = () => {

return (
    <div>
    <h2>Payment Page</h2>
    <div>
      <label>Amount:</label>
      <input type="number"  />
    </div>
    <div>
      <label>Card Number:</label>
      <input type="text" />
    </div>
    <div>
      <label>Expiry Date:</label>
      <input type="text"  />
    </div>
    <div>
      <label>CVC:</label>
      <input type="text"  />
    </div>
    <button >Submit Payment</button>
    <p>Payment successful!</p>
     {/* <p>error</p> */}
  </div>
);



}