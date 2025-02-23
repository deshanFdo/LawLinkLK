import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Find the Right Legal Help for You
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Connecting lawyers and clients for better legal solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
