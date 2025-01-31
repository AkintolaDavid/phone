import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/offerpage");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gradient-to-br from-[#0A0F24] via-[#101836] to-[#1B2A4A] h-screen flex flex-col relative">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-20 bg-[#DDE6E7] text-[#0A0F24] fixed top-0 left-0 right-0 shadow-md">
        <img src={logo} alt="logo" className="h-12 md:h-20" />
        <ul className="hidden md:flex space-x-6 md:space-x-8 font-medium text-sm md:text-base">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Service
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Team
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Features
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            FAQ
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Contact
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex justify-center items-center text-white px-4 md:px-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-glow">
              SHOP AT <span className="text-blue-500">MOBILEMINDS!</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-300">
              Unlock exclusive deals and offers on the latest mobile accessories
              and devices. Experience high-quality products at unbeatable
              prices, tailored for your mobile needs.
            </p>
            <button
              onClick={() => navigate("/offerpage")}
              className="mt-5 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition transform hover:scale-105"
            >
              Get Started
            </button>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <i className="fab fa-facebook text-2xl cursor-pointer hover:text-blue-400 transition"></i>
              <i className="fab fa-twitter text-2xl cursor-pointer hover:text-blue-400 transition"></i>
              <i className="fab fa-instagram text-2xl cursor-pointer hover:text-pink-400 transition"></i>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center animate-floating">
            <img
              src={phone}
              alt="Phone"
              className="w-[220px] sm:w-[260px] md:w-[350px] drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-glow"></div>
    </div>
  );
};

export default LandingPage;
