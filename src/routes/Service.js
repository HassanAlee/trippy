import React from "react";
import serviceImg from "../assets/img27.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
const Service = () => {
  return (
    <>
      <Navbar />
      <Hero cName={"hero-mid"} heroImg={serviceImg} title={"service"} />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
