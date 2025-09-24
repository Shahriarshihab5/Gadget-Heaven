import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping ,faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToStoredDeviceList } from "../../Utility/addToBd";

const Details = () => {


const handleDeviceList = (id) =>{
addToStoredDeviceList(id);

}

  const { product_id } = useParams();
  const data = useLoaderData();

  const device = data.find(d => d.product_id === product_id);

  if (!device) {
    return <div className="p-6 text-red-600">❗ Product not found</div>;
  }

  const { product_title, product_image, description, rating, availability, Specification, price } = device;

  return (
    <div>
      <section className="grid grid-cols-1 pb-72 items-center justify-center text-center py-8 bg-[#9538E2] text-white">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="max-w-2xl mx-auto mt-2">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
      </section>

      <section>
        <div className="hero p-4">
          <div className="bg-white -mt-65 mb-12 hero-content flex-col lg:flex-row border-0 rounded-2xl shadow-lg p-6">
            <img
              src={product_image}
              alt={product_title}
              className="max-w-sm rounded-lg shadow-2xl border border-gray-200"
            />

            <div className="lg:ml-8 mt-6 lg:mt-0 text-left">
              <h1 className="text-5xl font-bold mb-4">{product_title}</h1>
              <p className="text-xl font-semibold text-[#9538E2] mb-2">Price: {price}</p>
              <p className="mb-2">Availability: {availability}</p>
              <p className="py-4 text-gray-700">{description}</p>

              <h2 className="font-bold mb-2">Specification:</h2>
              <ul className="list-disc list-inside text-gray-700">
                {Specification?.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>

              <p className="mt-4">Rating: ⭐ {rating}</p>

             <div className="flex gap-4">
             <button onClick={()=>handleDeviceList(product_id)} className="px-6 py-2 bg-[#9538E2] !text-white rounded-3xl mt-4 flex items-center gap-2">
                
                Add To Cart <FontAwesomeIcon className="text-white" icon={faCartShopping} />
              </button>
              <FontAwesomeIcon className="mt-7 "  icon={faHeart} />
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
