import React from "react";
import aboutImg from "../assets/night.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName={"hero-mid"} heroImg={aboutImg} title={"about"} />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
