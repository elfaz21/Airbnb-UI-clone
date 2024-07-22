import React from "react";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import airbnb from "../../assets/airbnb.png";
import "./Topper.css";
import Tooper2 from "../secondT/Topper2";
import Catagories from "../catagories/Catagories";

const Topper = () => {
  return (
    <div className="topperSpace">
      <div className="topper">
        <img src={airbnb} alt="airbnb" />
        <div className="middle">
          <p>Stays</p>
          <p>Experiences</p>
        </div>
        <div className="top-end">
          <p>Airbnb your home</p>
          <FiGlobe className="globe-icon" />
          <div className="profile">
            <FiMenu className="hamburger-icon" />
            <FaUser className="profile-icon" />
          </div>
        </div>
      </div>
      <Tooper2 />
      <Catagories />
      <hr className="horizontal-line" />
    </div>
  );
};

export default Topper;
