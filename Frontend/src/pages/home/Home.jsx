import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Features />
      <FAQ />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
