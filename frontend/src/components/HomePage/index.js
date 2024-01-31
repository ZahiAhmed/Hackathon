import React, { useState } from "react";
import Carousel from "./Carousel";
import Texts from "./Texts";
import Stats from "./Stats";
import Video from "./Video";
import LanguageSelector from "../LanguageSwitcher/index";
import "./index.css";

const HomePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <Carousel />
      <Texts language={selectedLanguage} />
      <LanguageSelector onChange={handleLanguageChange} />
      <Stats language={selectedLanguage} />
      <Video language={selectedLanguage} />
      <div className="newsletter-container">
        <h2 className="stat-container-header">STAY CONNECTED!</h2>
        <a className="text-body-1-a">JOIN OUR NEWSLETTER {`>`}</a>
      </div>
    </div>
  );
};

export default HomePage;
