  import React from "react";


  function OrderPortfolio() {
    return (
      <div>
        <div className="py-10 flex justify-between ">
          <h3 className="text-dark text-3xl md:text-4xl dddd">
            Factory order portfolio
          </h3>
          <p className="underline text-sm font-normal hover:cursor-pointer ppppp">
            SEE ALL 
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 gppp">
          <div className="hover:cursor-pointer overflow-hidden">
            <img
              src="https://wood-fans-team.vercel.app/assets/CurvedPouf-e678e103.jpg"
              className="hover:scale-105 transform transition duration-500"
            />
            <p className="text-xl py-3 md:py-2">CURVE POUF - STYLE YOUR LIVING ROOM</p>
            {/* <p className="text-xs font-base text-gray-400">
              Beautiful bed for a teenager "Softy"
            </p> */}
          </div>
          <div className="hover:cursor-pointer overflow-hidden">
            <img
              src="https://wood-fans-team.vercel.app/assets/BedWithAdj-256832fc.jpg"
              className="hover:scale-105 transform transition duration-500"
            />
            <p className="text-xl py-2">BED WITH ADJUSTABLE HEADBOARD</p>
            {/* <p className="text-xs font-base text-gray-400">
              Sofa design artbabaynts
            </p> */}
          </div>
        </div>
      </div>
    );
  }

  export default OrderPortfolio;
