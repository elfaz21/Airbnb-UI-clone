import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Topper2.css";

const Tooper2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <p>Where</p>
          <p className="second-column">Search destinations</p>
        </div>
        <div className="column">
          <p>Check-in</p>
          <p className="second-column">Add dates</p>
        </div>
        <div className="column">
          <p>Checkout</p>
          <p className="second-column">Add dates</p>
        </div>
        <div className="column">
          <p>Who</p>
          <p className="second-column">Add guests</p>
        </div>
        <div className="column search-icon">
          <FiSearch />
        </div>
      </div>
    </div>
  );
};

export default Tooper2;
