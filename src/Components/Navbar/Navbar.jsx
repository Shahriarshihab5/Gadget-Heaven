import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/Home";

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-white pb-1"
            : "hover:border-b-2 hover:border-gray-300 pb-1"
        }
        style={isHome ? { color: "white" } : {}}
      >
        Home
      </NavLink>

      <NavLink
        to="/Statistics"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-white pb-1"
            : "hover:border-b-2 hover:border-gray-400 pb-1"
        }
        style={isHome ? { color: "white" } : {}}
      >
        Statistics
      </NavLink>

      <NavLink
        to="/Dashboard"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-white pb-1"
            : "hover:border-b-2 hover:border-gray-400 pb-1"
        }
        style={isHome ? { color: "white" } : {}}
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <div
      className={`w-372 shadow-sm transition-colors duration-300 ${isHome ? "rounded-t-2xl" : ""}`}
      style={{
        backgroundColor: isHome ? "#9538E2" : "white",
        margin: isHome ? "16px" : "0px", // only Home has margin
      }}
    >
      {/* Navbar content wrapper: consistent padding for all pages */}
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Left side: Brand & mobile dropdown */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <div tabIndex={0} className="btn btn-ghost p-2 bg-black rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 p-2 shadow bg-white rounded-box w-52"
              style={{
                backgroundColor: isHome ? "#9538E2" : "white",
                color: isHome ? "white" : "black",
              }}
            >
              {links}
            </ul>
          </div>

          <NavLink
            to="/"
            className={`font-bold text-lg ${isHome ? "text-white" : "text-gray-700"}`}
          >
            Gadget Heaven
          </NavLink>
        </div>

        {/* Center links for desktop */}
        <div className="hidden lg:flex gap-8">{links}</div>

        {/* Right icons */}
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`text-xl cursor-pointer ${isHome ? "text-white" : "text-gray-700"}`}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-xl cursor-pointer ${isHome ? "text-white" : "text-gray-700"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
