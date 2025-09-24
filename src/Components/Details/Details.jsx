import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToStoredDeviceList, getStoredDeviceList } from "../../Utility/addToBd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const device = data.find(d => d.product_id === product_id);

  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = getStoredDeviceList("wishlist");
    if (wishlist.includes(product_id)) setWishlisted(true);
  }, [product_id]);

  const handleAddToCart = () => {
    addToStoredDeviceList(product_id, "details");
    toast.success("Added to Cart!");
  };

  const handleWishlist = () => {
    const added = addToStoredDeviceList(product_id, "wishlist");
    if (added) {
      setWishlisted(true);
      toast.success("Added to Wishlist!");
    }
  };

  if (!device) return <div className="p-6 text-red-600">❗ Product not found</div>;

  const { product_title, product_image, description, rating, availability, Specification, price } = device;

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Header */}
      <section className="grid grid-cols-1 items-center justify-center text-center   pt-8 pb-60 bg-[#9538E2] text-white">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="max-w-2xl mx-auto mt-2">
          Explore the latest gadgets that will take your experience to the next level.
        </p>
      </section>

      {/* Product Info */}
      <section className="-mt-52">
        <div className="hero p-4">
          <div className="bg-white mb-12 hero-content flex flex-col lg:flex-row border-0 rounded-2xl shadow-lg p-6">
            <img
              src={product_image}
              alt={product_title}
              className="max-w-sm rounded-lg shadow-2xl border border-gray-200"
            />
            <div className="lg:ml-8 mt-6 lg:mt-0 text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product_title}</h1>
              <p className="text-xl font-semibold text-[#9538E2] mb-2">Price: ${price}</p>
              <p className="mb-2">Availability: {availability ? "In stock" : "Out of stock"}</p>
              <p className="py-4 text-gray-700">{description}</p>

              <h2 className="font-bold mb-2">Specification:</h2>
              <ul className="list-disc list-inside text-gray-700">
                {Specification?.map((spec, i) => <li key={i}>{spec}</li>)}
              </ul>

              <p className="mt-4">Rating: ⭐ {rating}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center gap-2 hover:bg-purple-700 transition"
                >
                  Add To Cart <FontAwesomeIcon icon={faCartShopping} />
                </button>

                <button
                  onClick={handleWishlist}
                  disabled={wishlisted}
                  className={`px-4 py-2 rounded-3xl border transition-all duration-200 
                    ${wishlisted 
                      ? "border-gray-400 text-gray-400 cursor-not-allowed" 
                      : "border-pink-500 text-pink-500 hover:border-purple-500 hover:text-purple-500"}`}
                >
                  <FontAwesomeIcon icon={faHeart} /> {wishlisted ? "Wishlisted" : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
