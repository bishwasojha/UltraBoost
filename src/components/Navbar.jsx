import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
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
              <NavLink exact to="/" className="navbar-link">
                Home
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                className="navbar-link"
              >
                How It Works
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink exact to="/" className="navbar-link">
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink exact to="/" className="navbar-link">
                Features
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                className="navbar-link"
                // onClick={() => navigate("/#faq")}
              >
                FAQ
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink exact to="/" className="navbar-link">
                Testimonials
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="right-container">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button 
              className="navbar-login-btn" 
              color="black" 
              type="submit">
              Log in
            </Button>
          </Link>

          <Link to="/" style={{ textDecoration: 'none' }}>
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
