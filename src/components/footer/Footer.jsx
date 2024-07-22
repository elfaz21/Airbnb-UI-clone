import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">How Airbnb works</a>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Airbnb Plus</a>
            </li>
            <li>
              <a href="#">Airbnb Luxe</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">Diversity & Belonging</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Airbnb Associates</a>
            </li>
            <li>
              <a href="#">Frontline Stays</a>
            </li>
            <li>
              <a href="#">Guest Referrals</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Host</h3>
          <ul>
            <li>
              <a href="#">Host your home</a>
            </li>
            <li>
              <a href="#">Host an Online Experience</a>
            </li>
            <li>
              <a href="#">Host an Experience</a>
            </li>
            <li>
              <a href="#">Responsible hosting</a>
            </li>
            <li>
              <a href="#">Resource Center</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Our COVID-19 Response</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Cancellation options</a>
            </li>
            <li>
              <a href="#">Neighborhood Support</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-left">
            <p>© 2024 Airbnb, made By Abrham Gashaw. All rights reserved</p>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-right">
            <ul>
              <li>
                <a href="#">English (US)</a>
              </li>
              <li>
                <a href="#">USD</a>
              </li>
              <li>
                <a href="#">Change</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
