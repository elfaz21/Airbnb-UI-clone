import React from "react";
import itemsData from "../../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FiHeart } from "react-icons/fi"; // Import the heart icon
import "./Card.css";

const ItemCard = () => {
  const { items } = itemsData;

  return (
    <div className="item-card">
      <div className="grid-container">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="item-images">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
              >
                {item.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <div className="heart-icon">
                      <FiHeart />
                    </div>
                    <img
                      src={image}
                      alt={`Item ${index + 1} - Image ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="item-details">
              <p>{item.hectares}</p>
              <p>{item.availability}</p>
              <p>Price per night: ${item.pricePerNight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
