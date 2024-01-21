import React from "react";
import Deepak from "../Images/Deepak.jpg";
import Rohit from "../Images/Rohit.png";
import Raushan from "../Images/Raushan.png";
import Heena from "../Images/Heena.png";
import Poornima from "../Images/Poornima.jpg"

function OurTeam() {
  return (
    <div className="py-10">
      <div>
        <h3 className="text-dark text-3xl md:text-4xl py-10 kkk ">Our Team</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ooo">
        <div>
          <div>
            <img
              src={Deepak}
              className="hover:scale-105 transition-transform image1"
            />
          </div>
          <div className="deepak">
            <h4 className="text-2xl py-3 md:py-2 font-medium">Deepak Purohit</h4>
            <p className="text-xs font-base text-gray-400">
              Full-stack developer
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={Rohit}
              className="hover:scale-105 transition-transform image2"
            />
          </div>
          <div className="deepak">
            <h4 className="text-2xl py-3 md:py-2 font-medium">Rohit Kumar</h4>
            <p className="text-xs font-base text-gray-400">Full-stack developer</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src= {Heena}
              className="hover:scale-105 transition-transform image3"
            />
          </div>
          <div className="deepak">
            <h4 className="text-2xl py-3 md:py-2 font-medium">Heena Parveen</h4>
            <p className="text-xs font-base text-gray-400">Full-stack developer</p>
          </div>
        </div>
        <div className="rrr">
          <div>
            <img
              src={Raushan}
              className="hover:scale-105 transition-transform image4"
            />
          </div>
          <div className="iii">
            <h4 className="text-2xl py-3 md:py-2 font-medium">Raushan Raj Singh	</h4>
            <p className="text-xs font-base text-gray-400">
            Full-stack developer
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={Poornima}
              className="hover:scale-105 transition-transform image5"
            />
          </div>
          <div className="oooo">
            <h4 className="text-2xl py-3 md:py-2 font-medium">Poornima Mohabe</h4>
            <p className="text-xs font-base text-gray-400">
            Full-stack developer
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default OurTeam;
