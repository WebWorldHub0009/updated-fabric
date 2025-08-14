import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaBars,
  FaTimes,
  FaBookOpen,
  FaToiletPaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../assets/fabric.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "#", icon: <FaServicestack /> },
    { name: "Catalogue", path: "/catalogue", icon: <FaBookOpen /> },
    { name: "Contact Us", path: "/contact", icon: <FaPhone /> },
    { name: "Certificates", path: "/certificates", icon: <FaToiletPaper /> },
  ];

  const serviceDropdownItems = [
    "Fabric for Acoustic",
    "Fabric for Cinema",
    "Fabric for Modular Kitchen",
    "Glaze Cotton Fabric for Stage Furnishing",
    "Fabric for Home Theater",
    "Cinema Chair Upholstery"
  ];

  const handleServiceClick = () => setServicesOpen(!servicesOpen);
  const handleServiceItemClick = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="w-full z-50">
      {/* Top Header */}
    <div className="bg-[#2E8B57] text-white text-xs md:text-sm px-4 py-2">
  {/* Desktop View */}
  <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center gap-2">
    <div className="flex items-center gap-4">
      <FaEnvelope />
      <a href="mailto:ashish@innovativesfabric.com" className="hover:underline">
        ashish@innovativesfabric.com
      </a>
      
     
    </div>
    <div className="flex items-center gap-6">
      <a href="tel:+919717958484" className="flex items-center gap-1 hover:underline">
        <FaPhoneAlt /> +91 9717958484
      </a>
     
    </div>
  </div>

  {/* Mobile View */}
  <div className="flex flex-col sm:hidden gap-2">
    {/* First Row */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <FaEnvelope />
        <a href="mailto:ashish@innovativesfabric.com" className="hover:underline">
          ashish@innovativesfabric.com
        </a>
      </div>
      <a href="tel:+919717958484" className="flex items-center gap-1 hover:underline">
        <FaPhoneAlt /> +91 9717958484
      </a>
    </div>
  </div>
</div>


      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="w-full mx-auto flex justify-between items-center px-4 py-3 md:py-3">
          {/* Logo */}
          <div className="text-[#2E8B57] cursor-pointer text-xl font-bold italic font-serif">
            <Link to={'/'}>
           <img
            src={logo}
            alt="Innovates Logo"
            className="w-auto h-16"
          />
          </Link>
          </div>

          {/* Desktop Nav */}
         <ul className="hidden md:flex gap-8 text-[#1E3D8F] font-normal relative">
  {navLinks.map((link, index) =>
    link.name === "Services" ? (
      <li key={index} className="relative uppercase">
        <button
          onClick={handleServiceClick}
          className="flex items-center gap-1 hover:text-[#2E8B57] transition"
        >
          {link.icon}
          {link.name}
          {servicesOpen ? <FiChevronUp className="mt-1" /> : <FiChevronDown className="mt-1" />}
        </button>
        <div
          className={`absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-xl p-4 w-[280px] transition-all duration-300 ease-in-out z-50 ${
            servicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="space-y-2 text-sm text-gray-700">
            {serviceDropdownItems.map((item, i) => (
              <li
                key={i}
                className="hover:bg-[#f0fdfa] hover:text-[#2E8B57] px-3 py-2 rounded-md transition font-normal"
              >
                <Link
                  to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={handleServiceItemClick}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ) : (
      <li key={index} className="capitalize">
        <Link
          to={link.path}
          className="flex items-center gap-1 hover:text-[#2E8B57] transition font-normal"
        >
          {link.icon}
          {link.name}
        </Link>
      </li>
    )
  )}
</ul>


          {/* CTA */}
          <div className="hidden md:flex gap-3">
            <Link to="/contact">
              <button className="bg-[#2E8B57] cursor-pointer hover:bg-[#256d4a] text-white px-5 py-2 rounded-full transition">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-[#2E8B57]" size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[90%] sm:max-w-[400px] bg-white shadow-2xl z-[999] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 overflow-y-auto rounded-l-xl`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <h2 className="text-[#2E8B57] text-xl font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-[#2E8B57]" size={22} />
          </button>
        </div>

        <div className="px-4 mt-4 space-y-2 pb-20">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.name === "Services" ? (
                <>
                  <div
                    className="flex justify-between items-center text-[#1E3D8F] font-semibold py-2 border-b cursor-pointer"
                    onClick={handleServiceClick}
                  >
                    <span>Services</span>
                    {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                  {servicesOpen && (
                    <ul className="ml-2 text-gray-700 text-sm">
                      {serviceDropdownItems.map((item, i) => (
                        <li key={i} className="py-2 border-b">
                          <Link
                            to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={handleServiceItemClick}
                            className="hover:text-[#2E8B57] transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="flex items-center gap-2 py-3 border-b text-gray-700 hover:text-[#2E8B57] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Book Now CTA in Mobile */}
          <div className="mt-6">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-[#2E8B57] hover:bg-[#256d4a] text-white py-3 rounded-full text-center text-sm font-semibold transition">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
