import React from "react";
import HomeTop from "./HomeTop";
import Gallery from "./Gallery";
import OrderPortfolio from "./OrderPortfolio";
import Contact from "./Contact";
import './Style.css'
import BuyersChoice from "./BuyersChoice";

const HomePage = () => {
  return (
    <div>
      <HomeTop />
      <BuyersChoice />
      <OrderPortfolio />
      <Gallery />
      <Contact />
    </div>
  );
};

export default HomePage;