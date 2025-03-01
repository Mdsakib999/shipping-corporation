import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-white text-center p-8"
      style={{
        backgroundImage:
          "url('https://www.constructionworld.in/assets/uploads/20f5aa8f827629e9ddb6f62b289002d5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>

      <div className="relative p-6 rounded-xl max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">
          We provide top-notch solutions in construction and development.
          Contact us today to learn more about our services.
        </p>
        <a
          href="" // Replace with your actual contact link
          className="bg-[#004F98] hover:bg-[#004F98] text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Banner;
