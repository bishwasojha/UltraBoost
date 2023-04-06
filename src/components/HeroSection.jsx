import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import { RiPlayCircleLine } from 'react-icons/ri'
import gwen from '../Assets/Images/gwen.jpg'
import logo1 from '../Assets/Logos/logoipsum-1.svg'
import logo2 from '../Assets/Logos/logoipsum-2.svg'
import logo3 from '../Assets/Logos/logoipsum-3.svg'
import logo4 from '../Assets/Logos/logoipsum-4.svg'

const HeroSection = () => {
  return (
    <>
      <div className="herosection-wrapper">
        <div className="hero-top-container">
          <div className="hero-text-cont">
            <div className="hero-text">
              <h2>
                The <span> Best </span>
                <h3> Elo Boosting Service Ever. </h3>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque
                nec.
              </p>
            </div>
            <div className="hero-btn">
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button
                  className="herosection-register-btn"
                  color="blue"
                  type="submit"
                >
                  Get Started
                </Button>
              </Link>

              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button className="read-faq-btn" color="black" type="submit">
                  <RiPlayCircleLine /> <span>Read FAQ</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero-image-cont">
            <div className="hero-img">
              <img src={gwen} alt="" srcset="" />
            </div>
            <Card />
          </div>
        </div>
        <div className="hero-bottom-container">
          <div className="logo-list">
            <ul className="hero-logos">
              <li className="each-logo">
                <img src={logo1} alt="" />
              </li>
              <li className="each-logo">
                <img src={logo2} alt="" />
              </li>
              <li className="each-logo">
                <img src={logo3} alt="" />
              </li>
              <li className="each-logo">
                <img src={logo4} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
