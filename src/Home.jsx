import React from "react";
import Topper from "../src/components/topper/Topper.jsx";

import ItemCard from "../src/components/cards/Card.jsx";
import Footer from "./components/footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Topper />

      <ItemCard />
      <Footer />
    </div>
  );
};

export default Home;
