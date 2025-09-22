import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Navbar />

    
      <Outlet />

      <Footer />
    </div>
  );
}
