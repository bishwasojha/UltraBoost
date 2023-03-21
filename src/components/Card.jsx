import React from "react";
import HamburgerMenu from "../Assets/Icons/About/about_hamburger-icon.svg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-top">
          <div className="card-text">Completed Orders</div>
          <img src={HamburgerMenu} alt="" />
        </div>
        <div className="card-bottom">
          <div className="card-number">15,290</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
