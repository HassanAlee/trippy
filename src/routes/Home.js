import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName={"hero"}
        heroImg={heroImg}
        title={"your journey your story"}
        text={"choose your favorite destination"}
        btnText={"Travel Plan"}
        url={"/"}
        btnClass={"show"}
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
