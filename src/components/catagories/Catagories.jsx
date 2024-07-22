import React, { useRef } from "react";
import {
  FiSun,
  FiHome,
  FiMapPin,
  FiCamera,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./Catagories.css";

const Categories = () => {
  const categories = [
    { icon: <FiSun />, text: "Tropical" },
    { icon: <FiHome />, text: "Room" },
    { icon: <FiMapPin />, text: "Islands" },
    { icon: <FiCamera />, text: "Adventure" },
    { icon: <FiHeart />, text: "Romantic" },
    { icon: <FiSun />, text: "Top of the Wind" },
    { icon: <FiHome />, text: "National Parks" },
    { icon: <FiMapPin />, text: "Amazing News" },
    { icon: <FiCamera />, text: "Play" },
    { icon: <FiHeart />, text: "Earth Homes" },
    { icon: <FiSun />, text: "New" },
    { icon: <FiHome />, text: "Top Cities" },
    { icon: <FiMapPin />, text: "Amazing Pools" },
    { icon: <FiCamera />, text: "Design" },
    { icon: <FiHeart />, text: "Luxe" },
    { icon: <FiSun />, text: "Bed and Breakfasts" },
    { icon: <FiHome />, text: "Beach Front" },
    { icon: <FiMapPin />, text: "Lakefront" },
    { icon: <FiCamera />, text: "Cabins" },
    { icon: <FiHeart />, text: "Mansions" },
    { icon: <FiSun />, text: "Caves" },
    { icon: <FiHome />, text: "Lake" },
    // Add more categories here
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += 200;
  };

  return (
    <div className="clickable-icons">
      <FiChevronLeft className="scroll-icon left" onClick={scrollLeft} />
      <div className="clickable-icons-container" ref={containerRef}>
        {categories.map((category, index) => (
          <div
            className={`item ${category.text === "Tropical" ? "active" : ""}`}
            key={index}
          >
            <div className="icon">{category.icon}</div>
            <p className="text">{category.text}</p>
          </div>
        ))}
      </div>
      <FiChevronRight className="scroll-icon right" onClick={scrollRight} />
    </div>
  );
};

export default Categories;
