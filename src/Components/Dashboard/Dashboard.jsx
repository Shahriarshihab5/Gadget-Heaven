import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import { getStoredDeviceList } from "../../Utility/addToBd";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  const navigate = useNavigate();
  const allDevice = useLoaderData();
  const [cartDevices, setCartDevices] = useState([]);
  const [wishlistDevices, setWishlistDevices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!allDevice) return;

    const cartIds = getStoredDeviceList("details");
    const wishlistIds = getStoredDeviceList("wishlist");

    setCartDevices(allDevice.filter(d => cartIds.includes(d.product_id)));
    setWishlistDevices(allDevice.filter(d => wishlistIds.includes(d.product_id)));
  }, [allDevice]);

  const removeFromCart = (id) => {
    const newList = cartDevices.filter(d => d.product_id !== id);
    setCartDevices(newList);

    const updatedCart = getStoredDeviceList("details").filter(i => i !== id);
    localStorage.setItem("details", JSON.stringify(updatedCart));
    toast.info("Item removed from Cart");
  };

  const removeFromWishlist = (id) => {
    const newList = wishlistDevices.filter(d => d.product_id !== id);
    setWishlistDevices(newList);

    const updatedWishlist = getStoredDeviceList("wishlist").filter(i => i !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.info("Item removed from Wishlist");
  };

  const sortByPrice = () => {
    const sortedList = [...cartDevices].sort((a, b) => b.price - a.price);
    setCartDevices(sortedList);
    toast.success("Cart sorted by price (high to low)");
  };

  const totalPrice = cartDevices.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handlePurchase = () => {
    setIsModalOpen(true);
    setCartDevices([]);
    localStorage.setItem("details", JSON.stringify([]));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/"); // redirect to home page
  };

  return (
    <div>
       <Helmet>
        <title>DashBoard</title>
      </Helmet>
      <ToastContainer position="top-right" autoClose={2000} />

      <section className="grid grid-cols-1 items-center justify-center text-center py-8 bg-[#9538E2] text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="max-w-2xl text-sm mx-auto mt-2">
          Explore the latest gadgets that will take your experience to the next level.
        </p>
      </section>

      <Tabs>
        <TabList className="flex justify-center gap-4 !bg-[#9538E2] pb-4 mb-4">
          <Tab className="px-8 py-2 rounded-3xl !text-white border !border-white cursor-pointer font-bold">Cart</Tab>
          <Tab className="px-8 py-2 rounded-3xl !text-white border border-white cursor-pointer font-bold">Wishlist</Tab>
        </TabList>

        {/* Cart Tab */}
        <TabPanel>
          <div className="relative">
            {/* Cart header */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-xl mb-6 shadow">
              <h1 className="text-2xl font-bold mb-2 md:mb-0">Cart</h1>
              <p className="text-lg font-semibold mb-2 md:mb-0">Total: ${totalPrice}</p>
              <div className="flex gap-3">
                <button
                  onClick={sortByPrice}
                  className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 transition"
                >
                  Sort by Price
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={cartDevices.length === 0}
                  className={`px-6 py-2 rounded ${
                    cartDevices.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#9538E2] text-white hover:bg-purple-700"
                  } transition`}
                >
                  Purchase
                </button>
              </div>
            </div>

            {/* Cart items */}
            <div className="grid grid-cols-1 mx-32">
              {cartDevices.map(device => (
                <Cart key={device.product_id} device={device} removeFromCart={removeFromCart} />
              ))}
            </div>

            {/* Modal over cart items only */}
            {isModalOpen && (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
    <div className="bg-white p-8 rounded-xl shadow-lg text-center w-96">
      <h2 className="text-2xl font-bold mb-4 text-green-600">🎉 Congratulations!</h2>
      <p className="mb-6">Your purchase was successful.</p>
      <button
        onClick={handleCloseModal}
        className="px-6 py-2 bg-[#9538E2] text-white rounded-3xl hover:bg-purple-700 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

          </div>
        </TabPanel>

        {/* Wishlist Tab */}
        <TabPanel>
          <Wishlist devices={wishlistDevices} removeFromWishlist={removeFromWishlist} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
