import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import { getStoredDeviceList, addToStoredDeviceList } from "../../Utility/addToBd";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
  const [deviceList, setDeviceList] = useState([]);
  const allDevice = useLoaderData(); // loader returns JSON array

  useEffect(() => {
    if (!allDevice) return;
    const storedDeviceList = getStoredDeviceList();
    const filteredDeviceList = allDevice.filter(device =>
      storedDeviceList.includes(device.product_id)
    );
    setDeviceList(filteredDeviceList);
  }, [allDevice]);

  // remove item from cart
  const removeFromCart = (id) => {
    const newList = deviceList.filter(device => device.product_id !== id);
    setDeviceList(newList);

    // also remove from localStorage
    const storedList = getStoredDeviceList().filter(itemId => itemId !== id);
    localStorage.setItem('details', JSON.stringify(storedList));
  };

  const totalPrice = deviceList.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div>
      <section className="grid grid-cols-1 items-center justify-center text-center py-8 bg-[#9538E2] text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="max-w-2xl text-sm mx-auto mt-2">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </section>

      <Tabs>
      <TabList className="flex justify-center gap-4 !bg-[#9538E2] pb-4 mb-4">
  <Tab
    className="px-8 py-2 rounded-3xl !text-white border !border-white cursor-pointer transition-colors duration-200
               ![aria-selected='true']:!bg-[#9538E2] ![aria-selected='true']:text-white font-bold"
  >
    Cart
  </Tab>
  <Tab
    className="px-8 py-2 rounded-3xl !text-white border border-white cursor-pointer transition-colors duration-200
               ![aria-selected='true']:bg-[#9538E2] ![aria-selected='true']:text-white font-bold"
  >
    Wishlist
  </Tab>
</TabList>


        <TabPanel>
          {/* Cart Header */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-xl mb-6 shadow">
            <h1 className="text-2xl font-bold mb-2 md:mb-0">Cart</h1>
            <p className="text-lg font-semibold mb-2 md:mb-0">Total: ${totalPrice}</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200 transition">
                Sort by Price
              </button>
              <button className="px-6 py-2 bg-[#9538E2] text-white rounded hover:bg-purple-700 transition">
                Purchase
              </button>
            </div>
          </div>

          {deviceList.length > 0 ? (
            <div className="grid grid-cols-1 mx-32">
              {deviceList.map((device) => (
                <Cart key={device.product_id} device={device} removeFromCart={removeFromCart} />
              ))}
            </div>
          ) : (
            <p className="text-center py-6 text-gray-500">No items in cart</p>
          )}
        </TabPanel>

        <TabPanel>
          <Wishlist />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
