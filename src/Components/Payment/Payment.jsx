import React from "react";
 

export  const Paymentdetails = () => {

  const formContainerStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
    textAlign: "start",
    fontWeight: "bold"
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={formContainerStyle}>
      <h2>Payment Details</h2>
      <form >
        <div style={formGroupStyle}>


        <label htmlFor="cardNumber" style={labelStyle}>
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            // placeholder="Enter your card number"
            style={inputStyle}
          />


          <label htmlFor="cardNumber" style={labelStyle}>
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter your card number"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="cardHolder" style={labelStyle}>
            Card Holder:
          </label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            placeholder="Enter the cardholder's name"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="expiryDate" style={labelStyle}>
            Expiry Date:
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="cvc" style={labelStyle}>
            CVC:
          </label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            placeholder="Enter the security code"
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Pay Now
        </button>
      </form>
    </div>
  );


}