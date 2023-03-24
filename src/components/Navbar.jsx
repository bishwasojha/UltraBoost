import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import UltraBoostLogo from '../Assets/Logos/UltraBoost.png'
import Button from './Button'
//import { ReactComponent as Hamburger } from "../Assets/Logo/Hamburger.svg";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  //const navigate = useNavigate();

  const handleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
      <div className="navbar-header">
        <div className="left-container">
          <div className="logo">
            <NavLink to="/" className="header-image">
              {' '}
              <img src={UltraBoostLogo} alt="Ultraboost Logo" />{' '}
            </NavLink>
          </div>
        </div>

        <div className="mid-container">
          <ul className={`main-navbar ${showNavbar && 'active'}`}>
            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar-link"
              >
                Home
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                How It Works
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar-link"
              >
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="navbar-link"
              >
                Features
              </NavLink>
            </li>

            <li className="navbar-item">
              <Link
                exact
                activeClassName="active"
                className="navbar-link"
                //onClick={() => navigate("/#faq")}
              >
                FAQ
              </Link>
            </li>

            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                activeclassname="active"
                className="navbar-link"
              >
                Testimonials
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="right-container">
          <Button className="navbar-login-btn" type="submit">
            <span>Log in</span>
          </Button>
          <Button className="navbar-register-btn" type="submit">
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Navbar
