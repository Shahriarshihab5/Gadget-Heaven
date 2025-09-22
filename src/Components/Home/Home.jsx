import React from "react";
import Devices from "../Devices/Devices";

const Home = () => {
  return (
    <div>
   
      <section className="bg-[#9538E2] px-12 flex items-center justify-center flex-col gap-4 pb-60 rounded-b-2xl overflow-hidden">
        <h1 className="text-5xl font-bold text-center text-white">
          Upgrade Your Tech Accessories with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-sm text-center text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <button className="btn rounded-2xl bg-white border-0 text-[#9538E2]">
          Shop Now
        </button>
      </section>

    
      <section className="flex justify-center -mt-48 w-[80%] max-w-[900px] mx-auto relative">
        <div className="relative w-full rounded-3xl overflow-hidden border-[6px] border-white/20 backdrop-blur-sm">
          <img
            className="w-full object-cover rounded-3xl"
            src="/assets/banner.jpg"
            alt="Banner"
          />
        </div>
      </section>

    
      <h1 className="text-3xl text-center mt-24 mb-12 font-bold">
        Explore Cutting-Edge Gadgets
      </h1>

    
      <section className="px-6 mb-12 lg:px-32 ">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          
          <div className="grid gap-4 bg-white py-6 px-4 rounded-2xl h-fit">
            {[
              "All Products",
              "Laptops",
              "Phones",
              "Accessories",
              "Smart Watches",
              "MacBook",
              "Iphone",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border-0 bg-gray-100 text-black hover:bg-[#9538E2] hover:text-white transition-colors duration-300 px-4 py-2"
              >
                {item}
              </button>
            ))}
          </div>

          
          <div>
            <Devices />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
