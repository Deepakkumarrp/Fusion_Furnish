import React, { useState } from "react";
import Sofa1 from "../Images/Sofa1.jpg";
import Sofa2 from "../Images/Sofa2.jpg";
import Sofa3 from "../Images/Sofa3.jpg";
import Bed1 from "../Images/Bed1.jpg";
import Bed2 from "../Images/Bed2.jpg";
import Bed3 from "../Images/Bed3.jpg";
import CF1 from "../Images/CF1.webp";
import CF2 from "../Images/CF2.webp";
import CF3 from "../Images/CF3.jpg";
import AR1 from "../Images/AR1.jpg";
import AR2 from "../Images/AR2.png";
import AR3 from "../Images/AR3.webp";
import { Link } from "react-router-dom";


const BuyersChoice = () => {
  const [selectedCategory, setSelectedCategory] = useState("sofas");

  const data = {
    sofas: [
      { id: 1, name: "DAVE SOFA", price: "₹18999", image: Sofa1 },
      { id: 2, name: "SOFA CITY", price: "₹20999", image: Sofa2 },
      { id: 3, name: "SOFA LOOP", price: "₹22999", image: Sofa3 },
    ],
    beds: [
      { name: "BED SIMPLE", price: "₹15999", image: Bed1 },
      { name: "BED JULE", price: "₹17999", image: Bed2 },
      { name: "BED MELANIA", price: "₹20999", image: Bed3 },
    ],
    children_Furniture: [
      { name: "CHILDREN'S BED SOFTY", price: "₹11999", image: CF1 },
      { name: "CHILDREN'S BED CLOUD", price: "₹14999", image: CF2 },
      { name: "CHILDREN'S BED SEA", price: "₹16999", image: CF3 },
    ],
    armchairs_And_Poufs: [
      { name: "BANQUETTE MADE OF SOLID", price: "₹8999", image: AR1 },
      { name: "ARMCHAIR TWIGGY", price: "₹9999", image: AR2 },
      { name: "BENCH SFERA", price: "₹11999", image: AR3 },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-10">
      <div>
        <h3 className="text-dark text-3xl md:text-4xl py-10  BY">Buyers' Choice</h3>
      </div>
      <div className="Bttons_top_bar">
        {["sofas", "beds", "children_Furniture", "armchairs_And_Poufs"].map((category) => (
          <button 
            key={category}
            className={`px-4 py-2 hhh ${
              selectedCategory === category ? "bg-primary-yellow" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data[selectedCategory].map((item) => (
          <div key={item.name}>
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="hover:scale-105 transition-transform imtt"
              />
            </div>
            <div className="data">
              <h4 className="text-2xl py-3 md:py-2 font-medium">{item.name}</h4>
              <p className="text-xs font-base text-gray-400">{`Price: ${item.price}`}</p>
              <button className="butt1">Details</button>
              <Link to={`/product/${item.id}`}>
                   <button className="butt2">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyersChoice;
