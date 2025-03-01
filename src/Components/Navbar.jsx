import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 shadow-md sticky top-0 bg-white z-30 lg:pr-12">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=652,fit=crop,q=95/YbNq66ZkMbhaRlZg/logo-A1aBVVw7yjh5Vnln.png"
            alt="Logo"
            className="h-12"
          />
        </NavLink>
      </div>

      {/* Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer ml-6" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex space-x-6 text-gray-800 text-lg ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative hover:text-blue-500 transition duration-300 ${
              isActive ? "text-blue-600 font-semibold underline" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dienstleistungen"
          className={({ isActive }) =>
            `relative hover:text-blue-500 transition duration-300 ${
              isActive ? "text-blue-600 font-semibold underline" : ""
            }`
          }
        >
          Service
        </NavLink>

        <NavLink
          to="/uber-uns"
          className={({ isActive }) =>
            `relative hover:text-blue-500 transition duration-300 ${
              isActive ? "text-blue-600 font-semibold underline" : ""
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/kontakt"
          className={({ isActive }) =>
            `relative hover:text-blue-500 transition duration-300 ${
              isActive ? "text-blue-600 font-semibold underline" : ""
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/impressum-and-datenschutz"
          className={({ isActive }) =>
            `relative hover:text-blue-600 transition duration-300 ${
              isActive ? "text-blue-600 font-semibold underline" : ""
            }`
          }
        >
          Impressum & Datenschutz
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transform ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-500 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <div className="flex flex-col items-center space-y-6 pb-6 text-lg text-gray-800">
          <NavLink to="/" onClick={toggleMenu} className="hover:text-blue-600">Startseite</NavLink>
          <NavLink to="/dienstleistungen" onClick={toggleMenu} className="hover:text-blue-600">Dienstleistugen</NavLink>
          <NavLink to="/uber-uns" onClick={toggleMenu} className="hover:text-blue-600">Uber uns</NavLink>
          <NavLink to="/kontakt" onClick={toggleMenu} className="hover:text-blue-600">Kontakt</NavLink>
          <NavLink to="/impressum-and-datenschutz" onClick={toggleMenu} className="hover:text-blue-600">Impressum & Datenschutz</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
