import style from "./payment.module.css";
// import style from "./Navbar.module.css"
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { Link } from "react-router-dom";
// import React from "react";

import React, { useState } from "react";
// heena css link


export const PaymentDetails = () => {
  const data = useSelector((store) => store.cart)
  let details = data.reduce((acc, e) => {
    return { ...acc, qty: acc.qty + e.qty, total: acc.total + Number(e.price) * e.qty }
  }, { qty: 0, total: 0 })
  console.log(details)
  const discount = Math.round(details.total * 24 / 100);


  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [value, setValue] = useState(5000);
  const [card, setcard] = useState(false);
  const [cod, setcod] = useState(false);
  const [phonepay, setPhonpay] = useState(false);
  const [googlepay, setGooglepay] = useState(false);
  const [payTm, setpayTm] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);




  const toggleModal = (e) => {
    console.log("modaltoggale")
    e.preventDefault()
    setTimeout(() => {
      setModal(!modal);
     
    }, 1000)

   
  };

  // function closetoggleModal1(){
  //   setTimeout(() => {
  //     setModal(!modal);
     
  //   }, 1000)

  //   toggleModal1();
  // }

  // function toggleModal1(){
  //   console.log(modal1)
  
  //   setModal1(!modal)
  //   console.log(modal1)
  // }


  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  const cardPaymentOption = () => {
    setcard(true);
    setcod(false);
    setGooglepay(false);
    setPhonpay(false);
    setpayTm(false);
  }

  const codpaymentoption = () => {
    setcod(true);
    setcard(false);
    setGooglepay(false);
    setPhonpay(false);
    setpayTm(false);
  }


  const phonepayoption = () => {
    setPhonpay(true);
    setGooglepay(false);
    setpayTm(false);
    setcod(false);
    setcard(false);
  }
  const googlepayoption = () => {
    setGooglepay(true);
    setPhonpay(false);
    setpayTm(false);
    setcod(false);
    setcard(false);
  }
  const paytmoption = () => {
    setpayTm(true);
    setGooglepay(false);
    setPhonpay(false);
    setcod(false);
    setcard(false);
  }



  const handleShippingSubmit = (e) => {
    e.preventDefault();
    alert("Please complete your payment")
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    setTimeout(function () {
      alert("Payment Successfull ");
    }, 2000);

    setTimeout(function () {
      alert("Order Successfull");
    }, 5000);

  };






  return (
    <>
      <div style={formContainerStyle}>
        <h2 style={headingStyle} className={style.heading} >Shipping Address</h2>
        <form onSubmit={handleShippingSubmit}>
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
                placeholder="Enter a landmark"
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
          <button className={style.addressbtn}  type="submit" >
            Submit
          </button>
        </form>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
      {showPaymentForm && (
        <div style={formContainerStyle} className={style.formmaincontainer}>
          <h2 style={codbuttonb}>Payment Details</h2>

          <div className={style.paymentoption}>

            <button style={codbuttona} onClick={codpaymentoption}>COD</button>
            <button onClick={paytmoption}><img className={style.paytm}  src="https://cdn-icons-png.flaticon.com/128/825/825454.png" alt="paytm" /></button>
            <button onClick={phonepayoption}><img className={style.phonepay} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlw6JvTiXBSHHAgLi6eOCGWjcKW_uD0XdH9Q&usqp=CAU" alt="phone pay" /></button>
            <button onClick={googlepayoption}><img className={style.paytm} src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="Google pay" /></button>
            <button onClick={cardPaymentOption}><img className={style.paytm} src="https://cdn-icons-png.flaticon.com/128/14035/14035060.png" alt="" />
            </button>
          </div>
        </div>
      )}


      {/* card payment option */}
      {card &&
        // onSubmit={handlePaymentSubmit}
        <div style={formContainerStyle}>
          <form >
            <div style={formGroupStyle}>
              <label htmlFor="amount" style={labelStyle}>
                Amount <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={details.total - discount}
                placeholder=" Enter Amount"
                required
                style={inputStyle}
                readOnly
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cardNumber" style={labelStyle}>
                Card Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter your card number"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cardHolder" style={labelStyle}>
                Card Holder <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="cardHolder"
                name="cardHolder"
                placeholder="Enter the cardholder's name"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="expiryDate" style={labelStyle}>
                Expiry Date <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cvc" style={labelStyle}>
                CVV <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="cvv"
                name="cvv"
                placeholder="Enter the security code"
                required
                style={inputStyle}
              />
            </div>
            <button className={style.paymentbtn} type="submit" style={buttonStyle} onClick={toggleModal}>
              Pay Now
            </button>
            {modal && (

              <div style={modalStyles}>
                <div onClick={toggleModal} style={overlayStyles}></div>
                <div style={modalContentStyles}>
                  <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                  >
                    <AlertIcon boxSize='40px' mr={0} color='green.500' />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                      Payment Succesful
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                      Thank you for payment, Visit again!
                    </AlertDescription>
                  </Alert>

                  <button style={modalCloseStyles} onClick={toggleModal}>
                    <Link to="/">X</Link>
                 
                  </button>
{/* ========================================== */}
                  {modal1 && (

                    <div style={modalStyles}>
                      <div onClick={toggleModal} style={overlayStyles}></div>
                      <div style={modalContentStyles}>
                        <Alert
                          status='success'
                          variant='subtle'
                          flexDirection='column'
                          alignItems='center'
                          justifyContent='center'
                          textAlign='center'
                          height='200px'
                        >
                          <AlertIcon boxSize='40px' mr={0} color='green.500' />
                          <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Order  Succesful
                          </AlertTitle>
                          <AlertDescription maxWidth='sm'>
                            Thank you for Order, Visit again!
                          </AlertDescription>
                        </Alert>

                        <button style={modalCloseStyles} onClick={toggleModal}>
                          {/* <Link to="/">X</Link> */}
                          X
                        </button>
                      </div>
                    </div>
                  )}
{/* ===================================================================== */}





                </div>
              </div>
            )}



          </form>
        </div>
      }
      {/* cash on delivery */}


      {cod &&
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>Cash on Delivery</h2>
          {/* <form onSubmit={handlePaymentSubmit}> */}
          <div style={formGroupStyle}>
            <label htmlFor="phoneNumber" style={labelStyle}>
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="amount" style={labelStyle}>
              Order Amount <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="amount"
              value={details.total - discount}
              placeholder="Enter the order amount"
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Delivery Charges</label>
            <span style={{ fontSize: "14px", color: "#333" }}>
              Free (For Cash on Delivery)
            </span>
          </div>
          <button className={style.paymentbtn} style={buttonStyles} type="submit" onClick={toggleModal}>
            Pay Now
          </button>

          {modal && (

            <div style={modalStyles}>
              <div onClick={toggleModal} style={overlayStyles}></div>
              <div style={modalContentStyles}>
                <Alert
                  status='success'
                  variant='subtle'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  textAlign='center'
                  height='200px'
                >
                  <AlertIcon boxSize='40px' mr={0} color='green.500' />
                  <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Order Succesful
                  </AlertTitle>
                  <AlertDescription maxWidth='sm'>
                    Thank you for Order, Visit again!
                  </AlertDescription>
                </Alert>

                <button style={modalCloseStyles} onClick={toggleModal}>
                <Link to="/">X</Link>
                </button>
              </div>

            </div>
          )}

          {/* </form> */}
        </div>
      }

      {/*  paytm payment option  */}

      {payTm &&
        <div style={formContainerStyle}>
          <p style={{ textAlign: "center", fontSize: "19px" }}>Pay to finish placing your order</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={style.largebutton} >Click here for redirect to PayTm</button>
          </div>
        </div>
      }




      {/* phone pay option  */}
      {phonepay &&
        <div style={formContainerStyle}>
          <p style={{ textAlign: "center", fontSize: "20px" }}>Pay to finish placing your order</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={style.largebutton}>Click here for redirect to PhonePay</button>
          </div>

        </div>
      }

      {/* Google pay option  */}
      {googlepay &&
        <div style={formContainerStyle}>
          <p style={{ textAlign: "center", fontSize: "19px" }}>Pay to finish placing your order</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={style.largebutton}>Click here for redirect to GooglePay</button>
          </div>

        </div>
      }



    </>
  );
};


const formContainerStyle = {
  maxWidth: "800px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  // backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  background: "#f8f8f8"

};

const formRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const formGroupStyle = {
  flex: "1 1 calc(50% - 10px)",
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "16px",
  color: "#333",
  textAlign: "start",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  boxSizing: "border-box",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "14px",
};

const buttonStyle = {
  display: "block",
  width: "20%",
  padding: "12px",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "rgb(252,205,92)",
  color: "black",
  fontSize: "16px",
  cursor: "pointer",
  margin: "auto",
  fontWeight: "bold"
};

const headingStyle = {
  fontSize: "1.8em",
  marginBottom: "20px",
  color: "#333",
};

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
const codbuttona = {
  fontWeight: "bold",
  fontSize: "22px"
}

const codbuttonb = {
  fontWeight: "bold",
  fontSize: "22px",
  textAlign: "center"
}


const buttonStyles = {
  

  display: "block",
  width: "20%",
  padding: "12px",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "rgb(252,205,92)",
  color: "black",
  fontSize: "16px",
  cursor: "pointer",
  margin: "auto",
  fontWeight: "bold"
};

const modalStyles = {
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "fixed",
};

const overlayStyles = {
  background: "rgba(49, 49, 49, 0.8)",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: "fixed",
};

const modalContentStyles = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  lineHeight: 1.4,
  background: "#f1f1f1",
  padding: "14px 28px",
  maxWidth: "600px",
  minWidth: "300px",
  // borderRadius: "10px",
};

const modalCloseStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  padding: "5px 7px",
  backgroundColor: "black",
  color: "white",
  marginRight: "25px",
  marginTop: "10px",
  opacity: 1,
};

const paymentHeadingStyles = {
  color: "black",
};