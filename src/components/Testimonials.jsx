import React from 'react';
import HomeTitle from '../components/HomeTitle';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-title">
        <HomeTitle>TESTIMONIALS</HomeTitle>
        <div className="testimonials-bold-text">
          <h3>Our Customer </h3>
          <h3> Says!</h3>
        </div>
      </div>
      <div className="testimonials-description">
        <div className="testimonials-card">
          <div className="img-svg"></div>
          <div className="testimonials-card-description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus
            feugiat lacus vitae neque ornare, adipiscing lacus vitae libero!
          </div>
          <div className="test-title">
            <div className="test-name">Antonia Jonathan</div>
            <div className="test-rank">@antoniojth</div>
          </div>
        </div>
        <div className="testimonials-card">
          <div className="img-svg"></div>

          <div className="testimonials-card-description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus
            feugiat lacus vitae neque ornare, adipiscing lacus vitae libero!
          </div>
          <div className="test-title">
            <div className="test-name">Antonia Jonathan</div>
            <div className="test-rank">@antoniojth</div>
          </div>
        </div>
        <div className="testimonials-card">
          <div className="img-svg"></div>

          <div className="testimonials-card-description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus
            feugiat lacus vitae neque ornare, adipiscing lacus vitae libero!
          </div>
          <div className="test-title">
            <div className="test-name">Antonia Jonathan</div>
            <div className="test-rank">@antoniojth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
