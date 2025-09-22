import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="mx-6 mt-4 rounded-t-2xl overflow-hidden font-['Sora']">
      <Navbar />

    
      <Outlet />

      <Footer />
    </div>
  );
}
