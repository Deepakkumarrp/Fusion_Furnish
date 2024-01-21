import React from "react";
import Reviews from "./Reviews";
import "./About.css";
import Contact from "./Contact";
import OurTeam from "./OurTeam";

function About() {
  return (
    <div className="py-5">
      <div className="text-dark text-4xl font-semibold pb-5 mmm">
        About Fusion Furnish
      </div>
      <div className="text-gray-700 text-lg leading-7 mb-8 ddd sss">
        Our in-house designers have mastered the art of creating time-honored designs that only grow fonder with each passing year. To bring these designs to life, we rely on the expertise of our master craftsmen, some of whom hail from fourth-generation furniture and sofa karigars, with a prestigious history of serving the Royals in Rajasthan. This legacy of craftsmanship is woven into our products, blending contemporary sensibilities with the traditions of excellence and quality. From sofas to chairs, coffee tables to soft furnishings, our range of products are proudly ‘Made in India’ and exemplify the highest standards of Indian craftsmanship, meticulously designed in styles that bring exceptional beauty to your homes.
      </div>
      <OurTeam />
      <Reviews />
      <Contact />
      

      {/* Additional content or sections for the About page can be added here */}
    </div>
  );
}

export default About;