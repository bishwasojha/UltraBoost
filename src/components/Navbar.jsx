import React, {useState} from 'react';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import UltraBoostLogo from '../Assets/Logos/UltraBoost.png';
import Button from './Button';
// import { ReactComponent as Hamburger } from "../Assets/Logo/Hamburger.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const navigate = useNavigate();

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

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
              <NavLink exact to="/" className="navbar-link">
                Home
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                exact
                to="/"
                className="navbar-link"
                target="_blank"
                rel="noopener noreferrer"
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
              <Link
                exact
                to="/"
                className="navbar-link"
                // onClick={() => navigate("/#faq")}
              >
                FAQ
              </Link>
            </li>

            <li className="navbar-item">
              <NavLink exact to="/" className="navbar-link">
                Testimonials
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="right-container">
          <Button className="navbar-login-btn" type="submit">
            <Link
              to="/login"
              className="not-registered-link"
              style={{textDecoration: 'none'}}
            >
              Login
            </Link>
          </Button>
          <Button className="navbar-register-btn" type="submit">
            <Link
              to="/register"
              className="not-registered-link"
              style={{textDecoration: 'none'}}
            >
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
