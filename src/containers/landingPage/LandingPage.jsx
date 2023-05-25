import React from "react";
import Hero from "./hero/Hero";
import About from "../about/About";
import { Contact, Footer } from "../../components";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
