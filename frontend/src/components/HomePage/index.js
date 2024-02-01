import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Texts from "./Texts";
import Stats from "./Stats";
import Video from "./Video";
import "./index.css";

const HomePage = () => {

  return (
    <div>
      <Carousel />
      <Texts />
      {/* <LanguageSelector onChange={handleLanguageChange} /> */}
      <Stats />
      <Video />
      <div className="newsletter-container">
        <h2 className="stat-container-header">STAY CONNECTED!</h2>
        <a className="text-body-1-a">JOIN OUR NEWSLETTER {`>`}</a>
      </div>
    </div>
  );
};

export default HomePage;
