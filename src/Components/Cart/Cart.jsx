import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const Cart = ({ device, removeFromCart }) => {
  const { product_id, product_title, product_image, price, Specification } = device;

  return (
    <div className="flex items-center justify-between w-full border rounded-xl p-4 mb-4 shadow-md bg-white">
      {/* Column 1: Product Image */}
      <div className="w-1/6">
        <img
          src={product_image}
          alt={product_title}
          className="w-full h-24 object-cover rounded-lg"
        />
      </div>

      {/* Column 2: Product Details */}
      <div className="w-3/5 px-4">
        <h2 className="text-xl font-bold mb-2">{product_title}</h2>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          {Specification?.map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>
        <p className="text-purple-700 font-semibold">Price: ${price}</p>
      </div>

      {/* Column 3: Remove Button */}
      <div className="w-1/6 flex justify-end">
        <button
          onClick={() => removeFromCart(product_id)}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
        >
          <CiCircleRemove />
        </button>
      </div>
    </div>
  );
};

export default Cart;
