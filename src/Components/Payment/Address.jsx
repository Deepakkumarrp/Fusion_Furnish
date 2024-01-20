// import React, { useState } from "react";

// export const AddressDetails = () => {
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [value, setValue] = useState(5000);
//   const [card, setcard] = useState(false);
//   const [cod, setcod] = useState(false);
//   const [phonepay, setPhonpay] = useState(false);
//   const [googlepay, setGooglepay] = useState(false);
//   const [payTm, setpayTm] = useState(false);



//   const cardPaymentOption = () => {
//     setcard(true);
//     setcod(false);
//     setGooglepay(false);
//     setPhonpay(false);
//     setpayTm(false);
//   }

//   const codpaymentoption = () => {
//     setcod(true);
//     setcard(false);
//     setGooglepay(false);
//     setPhonpay(false);
//     setpayTm(false);
//   }


//   const phonepayoption = () => {
//     setPhonpay(true);
//     setGooglepay(false);
//     setpayTm(false);
//     setcod(false);
//     setcard(false);
//   }
//   const googlepayoption = () => {
//     setGooglepay(true);
//     setPhonpay(false);
//     setpayTm(false);
//     setcod(false);
//     setcard(false);
//   }
//   const paytmoption = () => {
//     setpayTm(true);
//     setGooglepay(false);
//     setPhonpay(false);
//     setcod(false);
//     setcard(false);
//   }



//   const handleShippingSubmit = (e) => {
//     e.preventDefault();
//     alert("Please complete your payment")
//     setShowPaymentForm(true);
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();

//     console.log("Payment submitted:", {
//       cardNumber: e.target.cardNumber.value,
//       cardHolder: e.target.cardHolder.value,
//       expiryDate: e.target.expiryDate.value,
//       cvc: e.target.cvc.value,


//     });



//     setTimeout(function () {
//       alert("Payment Successfull ");
//     }, 2000);



//     setTimeout(function () {
//       alert("Order Successfull");
//     }, 5000);

//   };






//   return (
//     <>
//       <div style={formContainerStyle}>
//         <h2 style={headingStyle}>Shipping Address</h2>
//         <form onSubmit={handleShippingSubmit}>
//           <div style={formRowStyle}>
//             <div style={formGroupStyle}>
//               <label htmlFor="firstName" style={labelStyle}>
//                 First Name <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="lastName" style={labelStyle}>
//                 Last Name <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 placeholder="Enter your last name"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="address" style={labelStyle}>
//                 Address <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 placeholder="Enter your address"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="landmark" style={labelStyle}>
//                 Landmark <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="landmark"
//                 placeholder="Enter a landmark (optional)"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="city" style={labelStyle}>
//                 City <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 placeholder="Enter your city"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="state" style={labelStyle}>
//                 State <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="state"
//                 placeholder="Enter your state"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="pinCode" style={labelStyle}>
//                 Pin Code <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="pinCode"
//                 placeholder="Enter your pin code"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//           </div>
//           <button type="submit" style={buttonStyle}>
//             Submit
//           </button>
//         </form>
//       </div>
//       {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
//       {showPaymentForm && (
//         <div style={formContainerStyle}>
//           <h2 style={codbuttonb}>Payment Details</h2>

//           <div style={paymentoption}>

//             <button style={codbuttona} onClick={codpaymentoption}>COD</button>
//             <button onClick={paytmoption}><img style={payment_option_imagea} src="https://cdn-icons-png.flaticon.com/128/825/825454.png" alt="paytm" /></button>
//             <button onClick={phonepayoption}><img style={payment_option_imageb} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlw6JvTiXBSHHAgLi6eOCGWjcKW_uD0XdH9Q&usqp=CAU" alt="phone pay" /></button>
//             <button onClick={googlepayoption}><img style={payment_option_imagea} src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="Google pay" /></button>
//             <button onClick={cardPaymentOption}><img style={payment_option_imagea} src="https://cdn-icons-png.flaticon.com/128/14035/14035060.png" alt="" />
//             </button>


//           </div>





//         </div>
//       )}


//       {/* card payment option */}
//       {card &&
//         <div style={formContainerStyle}> <form onSubmit={handlePaymentSubmit}>
//           <div style={formGroupStyle}>
//             <label htmlFor="amount" style={labelStyle}>
//               Amount <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               id="amount"
//               name="amount"
//               value={value}
//               placeholder=" Enter Amount"
//               required
//               style={inputStyle}
//               readOnly
//             />
//           </div>
//           <div style={formGroupStyle}>
//             <label htmlFor="cardNumber" style={labelStyle}>
//               Card Number <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="number"
//               id="cardNumber"
//               name="cardNumber"
//               placeholder="Enter your card number"
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div style={formGroupStyle}>
//             <label htmlFor="cardHolder" style={labelStyle}>
//               Card Holder <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="text"
//               id="cardHolder"
//               name="cardHolder"
//               placeholder="Enter the cardholder's name"
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div style={formGroupStyle}>
//             <label htmlFor="expiryDate" style={labelStyle}>
//               Expiry Date <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="number"
//               id="expiryDate"
//               name="expiryDate"
//               placeholder="MM/YY"
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div style={formGroupStyle}>
//             <label htmlFor="cvc" style={labelStyle}>
//               CVV <span style={{ color: "red" }}>*</span>
//             </label>
//             <input
//               type="number"
//               id="cvc"
//               name="cvc"
//               placeholder="Enter the security code"
//               required
//               style={inputStyle}
//             />
//           </div>
//           <button type="submit" style={buttonStyle}>
//             Pay Now
//           </button>
//         </form>
//         </div>
//       }
//       {/* cash on delivery */}


//       {cod &&
//         <div style={formContainerStyle}>
//           <h2 style={headingStyle}>Cash on Delivery</h2>
//           <form >
//             <div style={formGroupStyle}>
//               <label htmlFor="phoneNumber" style={labelStyle}>
//                 Phone Number <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 placeholder="Enter your phone number"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label htmlFor="amount" style={labelStyle}>
//                 Order Amount <span style={{ color: "red" }}>*</span>
//               </label>
//               <input
//                 type="text"
//                 id="amount"
//                 placeholder="Enter the order amount"
//                 required
//                 style={inputStyle}
//               />
//             </div>
//             <div style={formGroupStyle}>
//               <label style={labelStyle}>Delivery Charges</label>
//               <span style={{ fontSize: "14px", color: "#333" }}>
//                 Free (For Cash on Delivery)
//               </span>
//             </div>
//             <button type="submit" style={buttonStyle}>
//               Place Order
//             </button>
//           </form>
//         </div>
//       }

//       {/*  paytm payment option  */}

//       {payTm &&
//         <div style={formContainerStyle}>
//           <p style={{ textAlign: "center", fontSize: "19px" }}>Pay to finish placing your order</p>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <button style={{ fontWeight: "bold", fontSize: "20px", backgroundColor: "#68bde1", width: "65%", height: "50px", borderRadius: "5px", marginTop: "40px ", }}>Click here for redirect to PayTm</button>
//           </div>
//         </div>
//       }

//       {/* phone pay option  */}
//       {phonepay &&
//         <div style={formContainerStyle}>
//           <p style={{ textAlign: "center", fontSize: "20px" }}>Pay to finish placing your order</p>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <button style={{ fontWeight: "bold", fontSize: "20px", backgroundColor: "#68bde1", width: "65%", height: "50px", borderRadius: "5px", marginTop: "40px" }}>Click here for redirect to PhonePay</button>
//           </div>

//         </div>
//       }

//       {/* Google pay option  */}
//       {googlepay &&
//         <div style={formContainerStyle}>
//           <p style={{ textAlign: "center", fontSize: "19px" }}>Pay to finish placing your order</p>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <button style={{ fontWeight: "bold", fontSize: "20px", backgroundColor: "#68bde1", width: "65%", height: "50px", borderRadius: "5px", marginTop: "40px" }}>Click here for redirect to GooglePay</button>
//           </div>

//         </div>
//       }



//     </>
//   );
// };













// const formContainerStyle = {
//   maxWidth: "800px",
//   margin: "20px auto",
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   // backgroundColor: "#fff",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   background: "linear-gradient(to top, #dfe9f3 0%, white 100%)"


// };

// const formRowStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "20px",
// };

// const formGroupStyle = {
//   flex: "1 1 calc(50% - 10px)",
//   marginBottom: "20px",
// };

// const labelStyle = {
//   display: "block",
//   marginBottom: "8px",
//   fontSize: "16px",
//   color: "#333",
//   textAlign: "start",
//   fontWeight: "bold",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   boxSizing: "border-box",
//   border: "1px solid #ddd",
//   borderRadius: "4px",
//   fontSize: "14px",
// };

// const buttonStyle = {
//   display: "block",
//   width: "20%",
//   padding: "12px",
//   boxSizing: "border-box",
//   border: "none",
//   borderRadius: "4px",
//   backgroundColor: "#007BFF",
//   color: "#fff",
//   fontSize: "16px",
//   cursor: "pointer",
//   margin: "auto",
// };

// const headingStyle = {
//   fontSize: "1.8em",
//   marginBottom: "20px",
//   color: "#333",
// };

// const paymentoption = {
//   display: "flex",
//   flexDirection: "row",
//   alignItem: "center",
//   gap: "80px",
//   justifyContent: "space-between",
//   height: "170px"

// }

// const payment_option_imagea = {
//   height: "70px",
//   width: "70px"
// }

// const payment_option_imageb = {
//   height: "50px",
//   width: "50px",
//   borderRadius: "5px"
// }
// const codbuttona = {
//   fontWeight: "bold",
//   fontSize: "22px"
// }

// const codbuttonb = {
//   fontWeight: "bold",
//   fontSize: "22px",
//   textAlign: "center"
// }