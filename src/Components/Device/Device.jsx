import React from "react";
import { NavLink } from "react-router-dom";

const Device = ({ device }) => {
  return (
    <div className="card w-72 bg-white shadow-lg rounded-xl  p-4">
    
      <figure className="bg-gray-200 h-40 flex items-center justify-center rounded-lg">
        <img
          src={device.product_image}
          alt={device.product_title}
          className="h-full object-contain"
        />
      </figure>


      <div >
       <div className=" flex flex-col gap-2 mt-2">
       <h2 className="card-title text-lg font-semibold">
          {device.product_title}
        </h2>
        <p className="text-gray-600">Price: {device.price}</p>
       </div>

     <NavLink to="/Details">  <button className="px-4 py-2 font-semibold rounded-2xl border-1 border-pink-500 text-pink-500 hover:border-purple-500 hover:text-purple-500 transition-colors duration-300">
  View Details
</button>
</NavLink>
       
      </div>
    </div>
  );
};

export default Device;
