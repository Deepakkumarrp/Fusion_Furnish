import React from "react";
import Hommee from "../Images/Hommee.jpg"

function HomeTop() {
  return (  
    <div className="relative">
      <div className="w-full-top-img  "><img className="w-full-top-img" src={Hommee} alt="Fusion Furnish"/></div>
      
      <div className="w-fulll">
        <p className="w-fulll-1 animated-text">
          FUSION FURNISH
        </p>
        <h2 className="w-fulll-2 animated-text">
          WE PRODUCE LUXURIOUS FURNITURE
        </h2>
      </div>
      <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
    </div>
  );
}

export default HomeTop;
