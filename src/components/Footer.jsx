import React from "react";
import UltraBoost_icon from "../Assets/Icons/UltraBoost-icon.svg";
import fb_icon from "../Assets/Icons/fb_vector.svg";
import insta_icon from "../Assets/Icons/Insta_vector.svg";
import twitter_icon from "../Assets/Icons/Twitter_vector.svg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-pageslink">
          <div className="footer-logo">
            <div className="logo">
              <img src={UltraBoost_icon} alt="" />
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adip elit.Posuere dolor
                massa, pellentesque.
              </p>
            </div>
          </div>
          <div className="footer-pages">
            <div className="pages">
              <h4>PAGES</h4>
              <ul className="pgs">
                <li className="each-pgs">Home Page</li>

                <li className="each-pgs">About us</li>

                <li className="each-pgs">Event</li>

                <li className="each-pgs">Contact</li>

                <li className="each-pgs">Contact</li>
              </ul>
            </div>

            <div className="ref-pages">
              <h4>REFERENCE PAGE</h4>
              <ul className="pgs">
                <li className="each-pgs">Style Guide</li>

                <li className="each-pgs">Instructions</li>

                <li className="each-pgs">Licensing</li>

                <li className="each-pgs">Changelog</li>

                <li className="each-pgs">Style Guide</li>
              </ul>
            </div>

            <div className="pages">
              <h4>PAGES</h4>
              <ul className="pgs">
                <li className="each-pgs">Home Page</li>

                <li className="each-pgs">About us</li>

                <li className="each-pgs">Event</li>

                <li className="each-pgs">Contact</li>

                <li className="each-pgs">About us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-sociallink">
          <div className="copyright">
            <p> &copy; 2021 Copyright Company.com</p>
          </div>
          <div className="social-links">
            <ul className="social">
              <li className="footer-fb">
                <img src={fb_icon} alt="" />
              </li>
              <li className="footer-insta">
                <img src={insta_icon} alt="" />
              </li>
              <li className="footer-twitter">
                <img src={twitter_icon} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
