import React from 'react'
import { Link } from 'react-router-dom'
import UltraBoostLogo from '../Assets/Logos/UltraBoost.png'
import Button from './Button'
// import { ReactComponent as Hamburger } from "../Assets/Logo/Hamburger.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar-header">
        <div className="left-container">
          <div className="logo">
            <Link to="/" className="header-image">
              <img src={UltraBoostLogo} alt="Ultraboost Logo" />
            </Link>
          </div>
        </div>

        <div className="mid-container">
          <ul className={`main-navbar`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/#timeline" className="navbar-link">
                How It Works
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/#about" className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/#features" className="navbar-link">
                Features
              </Link>
            </li>

            <li className="navbar-item">
              <Link
                to="/#faq"
                className="navbar-link"
                // onClick={() => navigate("/#faq")}
              >
                FAQ
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/#testimonials" className="navbar-link">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div className="right-container">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button className="navbar-login-btn" color="black" type="submit">
              Log in
            </Button>
          </Link>

          <Link to="/account" style={{ textDecoration: 'none' }}>
            <Button className="navbar-register-btn" color="blue" type="submit">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
