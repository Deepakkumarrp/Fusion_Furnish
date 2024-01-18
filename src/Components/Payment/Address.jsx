import React from "react";

export const AddressDetails = () => {

  const formContainerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const formRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const formGroupStyle = {
    flex: '1 1 calc(50% - 10px)',
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
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
    width: '20%',
    padding: '12px',
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    margin: "auto"
  };


  const headingStyle = {
    fontSize: '1.8em',
    marginBottom: '20px',
    color: '#333',
  };
  return (
    <div style={formContainerStyle}>
      <h2 style={headingStyle}>Shipping Address</h2>
      <form action="">
        <div style={formRowStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="firstName" style={labelStyle}>
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="lastName" style={labelStyle}>
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="address" style={labelStyle}>
              Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="landmark" style={labelStyle}>
              Landmark <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="landmark"
              placeholder="Enter a landmark (optional)"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="city" style={labelStyle}>
              City <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="state" style={labelStyle}>
              State <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="state"
              placeholder="Enter your state"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="pinCode" style={labelStyle}>
              Pin Code <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="pinCode"
              placeholder="Enter your pin code"
              required
              style={inputStyle}
            />
          </div>
        </div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}