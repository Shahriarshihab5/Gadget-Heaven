import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="  rounded-t-2xl  font-['Sora']">
      <Navbar />

    
      <Outlet />

      <Footer />
    </div>
  );
}
