import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
     
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Gadget Heaven</h2>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <div className="my-6 border-t border-gray-300"></div>


       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Product Support</a></li>
              <li><a href="#" className="hover:text-gray-900">Order Tracking</a></li>
              <li><a href="#" className="hover:text-gray-900">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
            </ul>
          </div>

     
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
