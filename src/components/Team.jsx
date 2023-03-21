import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-title">
        <h4>TEAM</h4>
        <div className="team-bold-text">
            <h3>  Meet Our <span>Boosting Team</span> </h3> 
        </div>
      </div>
      <div className="team-description">
        <div className="team-card">
          <div className="img-placeholder"></div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="user-rank">Challenger</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
            <AiOutlineTwitter />
            <BsFacebook />
            <AiFillInstagram />
          </div>
        </div>
        <div className="team-card">
          <div className="img-placeholder"></div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="user-rank">Grandmaster</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
            <AiOutlineTwitter />
            <BsFacebook />
            <AiFillInstagram />
          </div>
        </div>
        <div className="team-card">
          <div className="img-placeholder"></div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="line"></div>
            <div className="user-rank">Master</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
            <AiOutlineTwitter />
            <BsFacebook />
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
