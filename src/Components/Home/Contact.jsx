import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const handleSendClick = () => {
    // Show success toast when the send button is clicked
    toast.success("Sent successfully!", {
      position: "top-right",
      autoClose: 3000, // Auto close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="py-5 flex flex-col md:flex-row gap-5 ppp" style={{
      "display": "flex",
      "margin": "auto",
      "boxSizing": "border-box",
      "marginLeft": "30px"}}>
      <div className="md:w-2/5">
        <h3 className="text-dark text-4xl www">Contact Us</h3>
      </div>
      <div className="md">
        <div className="flex flex-col gap-4">
          <p className="font-medium text-base md:text-lg text-gray-600 py-">
            Our team of experienced designers and craftsmen will be happy to
            create for you unique furniture that reflects your style and
            preferences.
          </p>
          <div className="flex gap-5 text-xs">
            <input
              type="text"
              name="name"
              placeholder="What is your name?"
              className="w-1/2 border-b border-gray-400 p-2 focus:outline-none vvv"
            />
            <input
              type="tel"
              name="number"
              placeholder="+91(_ _ _)_ _ _-_ _ _"
              className="w-1/2 border-b border-gray-400 p-2 focus:outline-none zzz"
            />
          </div>
          <div className="text-xs">
            <input
              type="text"
              name="message"
              placeholder="Enter your message"
              className="w-full border-b border-gray-400 p-2 focus:outline-none"
            />
          </div>
        </div>
        <div className=" flex justify-between items-center py-8 gap-4">
          <div className="flex gap-2">
            <input type="checkbox" />
            <label htmlFor="checkbox" className="text-sm uuuu">
              I consent to the processing of personal data
            </label>
          </div>
          <div>
            <button
              onClick={handleSendClick}
              className="px-8 py-2 md:px-10 md:py-3 bg-primary-yellow hover:bg-yellow-300 bbbb"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;