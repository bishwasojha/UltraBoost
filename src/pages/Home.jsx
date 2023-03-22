import React from "react";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Feature from "../components/Feature";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <>
    <Timeline />
    <div className="root-container">
    <div className="homepage-about">
    <About />
    </div>

      
      <div className="homepage-team">
        <Team />
      </div>
      <div className="homepage-feature">
        <Feature />
      </div>

      <div className="homepage-faq">
        <FAQ />
      </div>
      <div className="homepage-testimonials">
        <Testimonials />
      </div>

    </div>

      <div className="homepage-footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
