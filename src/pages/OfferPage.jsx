import React, { useState } from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const OfferPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/"); // Redirect to Offer Page
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send form data to your backend or perform any actions
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-12 flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {" "}
      <IoMdArrowRoundBack
        onClick={handleback}
        className="absolute top-8 sm:top-12 left-8 sm:left-12 text-white text-3xl lg:text-4xl"
      />
      <div className="w-[90%] sm:w-full max-w-lg bg-[#DDE6E7] p-4 sm:p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={logo} // Replace with your actual logo path
            alt="MobileMinds Logo"
            className="h-20"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Exclusive Offer Just For You!
        </h2>
        <p className="mt-2 sm:mt-4 text-center text-gray-600">
          Fill in your details below to claim your special discount on selected
          mobile products.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-[#0A0F24]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-2 w-full  rounded-[8px] bg-white text-[#0A0F24]"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-[#0A0F24]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-2 w-full  rounded-[8px] bg-white text-[#0A0F24]"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-[#0A0F24]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-2 w-full  rounded-[8px] bg-white text-[#0A0F24]"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-[#35044F] hover:bg-[#440B6B] px-6 py-3 rounded-lg text-white font-semibold w-full"
          >
            Claim Offer
          </button>
        </form>
      </div>
    </section>
  );
};

export default OfferPage;
