import React from "react";
import contactImg from "../assets/2.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName={"hero-mid"} heroImg={contactImg} title={"contact"} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
