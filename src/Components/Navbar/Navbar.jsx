import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const location = useLocation(); 
    const isHome = location.pathname === "/Home"; 


    const links = <>
        <NavLink 
            to="/Home"
            className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-white pb-1" 
                    : "hover:border-b-2 hover:border-gray-300 pb-1"
            }
            style={isHome ? { color: "white" } : {}}
        >Home</NavLink>

        <NavLink 
            to="/Statistics"
            className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-white pb-1"
                    : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
            style={isHome ? { color: "white" } : {}}
        >Statistics</NavLink>

        <NavLink 
            to="/Dashboard"
            className={({ isActive }) =>
                isActive
                    ? "border-b-2 border-white pb-1"
                    : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
            style={isHome ? { color: "white" } : {}}
        >Dashboard</NavLink>
    </>

    return (
        <div
            className="navbar shadow-sm transition-colors duration-300 px-12"
            style={isHome ? { backgroundColor: "#9538E2" } : { backgroundColor: "white" }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost bg-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
                        style={isHome ? { backgroundColor: "#9538E2", color: "white" } : { backgroundColor: "white", color: "black" }}
                    >
                        {links}
                    </ul>
                </div>

                {/* Brand text as NavLink */}
                <div>
                    <NavLink to="/Home" style={isHome ? { color: "white", fontWeight: "bold" } : { color: "gray", fontWeight: "bold" }}>
                        Gadget Heaven
                    </NavLink>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8"
                        style={isHome ? { backgroundColor: "#9538E2", color: "white" } : { backgroundColor: "white", color: "black" }}>
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-4">
                {/* Cart and Heart Icons */}
                <FontAwesomeIcon icon={faCartShopping} className={isHome ? "text-white text-xl cursor-pointer" : "text-gray-700 text-xl cursor-pointer"} />
                <FontAwesomeIcon icon={faHeart} className={isHome ? "text-white text-xl cursor-pointer" : "text-gray-700 text-xl cursor-pointer"} />
            </div>
        </div>
    );
};

export default Navbar;
