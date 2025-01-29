import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/offerpage"); // Redirect to Offer Page after 4 seconds
    }, 4000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="bg-[#0A0F24] h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-6 md:px-20 bg-[#DDE6E7] text-[#0A0F24] fixed top-0 left-0 right-0">
        <img src={logo} alt="logo" className="h-12 md:h-20" />
        <ul className="hidden md:flex space-x-6 md:space-x-8 font-medium text-sm md:text-base">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">Service</li>
          <li className="cursor-pointer hover:text-blue-400">Team</li>
          <li className="cursor-pointer hover:text-blue-400">Features</li>
          <li className="cursor-pointer hover:text-blue-400">FAQ</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex justify-center items-center text-white mt-16 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              SHOP AT MOBILEMINDS!
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200">
              Unlock exclusive deals and offers on the latest mobile accessories
              and devices. Experience high-quality products at unbeatable
              prices, tailored for your mobile needs.
            </p>
            <button
              onClick={() => navigate("/offerpage")}
              className="mt-4 sm:mt-6 bg-blue-600 hover:bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-semibold"
            >
              Get Started
            </button>
            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              <i className="fab fa-facebook text-lg sm:text-xl cursor-pointer hover:text-blue-400"></i>
              <i className="fab fa-twitter text-lg sm:text-xl cursor-pointer hover:text-blue-400"></i>
              <i className="fab fa-instagram text-lg sm:text-xl cursor-pointer hover:text-pink-400"></i>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src={phone}
              alt="Phone"
              className="w-[200px] sm:w-[250px] md:w-[350px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
