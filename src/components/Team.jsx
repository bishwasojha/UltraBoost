import React from "react";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineTwitter,AiFillInstagram} from "react-icons/ai";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-black-bar">
        <div className="team-title">
            TEAM
        </div>
        <div className="team-bold-text">
            Meet Our <span>Boosting Team</span>
        </div>
    </div>
      <div className="team-description">
        <div className="team-card">
          <img src="" alt="something" />
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="user-rank">Challenger</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis
          </div>
          <div className="card-links">
            <BsFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
        <div className="team-card">
          <div className="image">
            <img src="" alt="aphelios" />
          </div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="user-rank">Challenger</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
          <BsFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
        <div className="team-card">
            <img src="" alt="usedtoknow" />
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="user-rank">Challenger</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euis
          </div>
          <div className="card-links">
          <BsFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;