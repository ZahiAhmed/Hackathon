import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Texts from "./Texts";
import Stats from "./Stats";
import Video from "./Video";
import "./index.css";

const HomePage = () => {
 
  const [textToSpeak, setTextToSpeak] = useState("");
  const [statToSpeak, setStatToSpeak] = useState("");


  const handleSpeak = () => {
    if (textToSpeak) {
      const speech = new SpeechSynthesisUtterance(textToSpeak);
      window.speechSynthesis.speak(speech);
    }
  };

  const handleStatsSpeak = () => {
    
    // Speak the stats text
    if (statToSpeak) {
      const speech = new SpeechSynthesisUtterance(statToSpeak);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div>
      <Carousel />
      <Texts setTextToSpeak={setTextToSpeak} />
      {/* <LanguageSelector onChange={handleLanguageChange} /> */}

      <Stats setStatToSpeak={setStatToSpeak} />
      {/* <button onClick={handleStatsSpeak}>Read Stats</button> */}
      <Video />
    </div>
  );
};

export default HomePage;
