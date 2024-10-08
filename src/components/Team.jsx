import React from 'react'
import { BsFacebook , BsDiscord } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-title">
        <h4>TEAM</h4>
        <div className="team-bold-text">
          <p>
            Meet Our <span>Boosting Team</span>
          </p>
        </div>
      </div>
      <div className="team-description">
        <div className="team-card">
          <div className="img-placeholder"></div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="long-line"></div>
            <div className="user-rank">Challenger</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
            <BsDiscord />
            <BsFacebook />
            <AiFillInstagram />
          </div>
        </div>
        <div className="team-card">
          <div className="img-placeholder"></div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="long-line"></div>
            <div className="user-rank">Grandmaster</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
            <BsDiscord  />
            <BsFacebook />
            <AiFillInstagram />
          </div>
        </div>
        <div className="team-card">
          <div className="img-placeholder"></div>
          <div className="user-title">
            <div className="user-name">Jesica Janet</div>
            <div className="long-line"></div>
            <div className="user-rank">Master</div>
          </div>
          <div className="team-card-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit integeriet.
          </div>
          <div className="card-links">
            <BsDiscord />
            <BsFacebook />
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
