import React from "react";
import FAQ from "../components/FAQ";
import Feature from "../components/Feature";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
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

      <div className="homepage-footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
