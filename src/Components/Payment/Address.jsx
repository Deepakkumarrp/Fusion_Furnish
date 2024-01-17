import React from "react";

export const AddressDetails = () => {


    return(

        <div>
<h2>Shipping Address</h2>
      <div>
        <label>First Name:</label>
        <input type="text"  />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text"  />
      </div>
      <div>
        <label>Address:</label>
        <input type="text"  />
      </div>
      <div>
        <label>Landmark:</label>
        <input type="text"  placeholder="Street / Colony / lane No."/>
      </div>
      <div>
        <label>City:</label>
        <input type="text"  />
      </div>
      <div>
        <label>State:</label>
        <input type="text"  />
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="text" placeholder="000000" />
      </div>
        </div>
    )
}