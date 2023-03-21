import React from "react";
import HamburgerMenu from "../Assets/Icons/About/about_hamburger-icon.svg";
import UserIcon from "../Assets/Icons/About/about_user-icon.svg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-top">
          <div className="card-text">Completed Orders</div>
          <img src={HamburgerMenu} alt="" />
        </div>
        <div className="card-bottom">
            
            <div className="card-user-icon">
                <img src={UserIcon} alt="" />
            </div>
          <div className="card-number">15,290</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
