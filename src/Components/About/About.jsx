import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 px-6 py-12">
      <Helmet>
        <title>About Us | Gadget Heaven</title>
      </Helmet>

      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-purple-800 mb-6">
          About Gadget Heaven
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Gadget Heaven is your ultimate destination for cutting-edge technology and innovative gadgets. 
          We bring the latest devices, accessories, and smart solutions right to your fingertips, 
          ensuring you stay ahead in the world of technology.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <img
            src="/assets/banner.jpg"
            alt="About Gadget Heaven"
            className="rounded-3xl shadow-lg"
          />

          <div className="space-y-6 text-left">
            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To provide tech enthusiasts with high-quality gadgets that enhance everyday life and work. 
                We strive to deliver excellence, innovation, and the best customer experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading online hub for tech lovers, connecting people with the latest gadgets 
                and smart accessories across the globe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Wide selection of the latest gadgets</li>
                <li>Trusted reviews and product details</li>
                <li>Fast shipping and excellent customer support</li>
                <li>Secure online shopping experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
