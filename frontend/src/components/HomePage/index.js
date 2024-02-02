import React, { useState, useEffect, useRef } from "react";
import Carousel from "./Carousel";
import Texts from "./Texts";
import Stats from "./Stats";
import Video from "./Video";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
import "./index.css";

const HomePage = () => {
  const { selectedLanguage } = useLanguage();
  
  const [textToSpeak, setTextToSpeak] = useState("");
  const [statToSpeak, setStatToSpeak] = useState("");
  
  const speechSynthesisRef = useRef(null); // Ref to hold the speech synthesis instance

  useEffect(() => {
    console.log("Language changed, stopping speech synthesis...");
    const speech = speechSynthesisRef.current;
    if (speech) {
      console.log("Speech object exists in ref.");
      speechSynthesis.cancel(); // Cancel the speech synthesis
      console.log("Speech synthesis stopped.");
    } else {
      console.log("Speech object does not exist in ref.");
    }
  }, [selectedLanguage]);

  const handleSpeak = () => {
    if (textToSpeak) {
      const speech = new SpeechSynthesisUtterance(textToSpeak);
      speech.lang = selectedLanguage === 'es' ? 'es-ES' : 'en-US';
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
    }
  };

  const handleStatsSpeak = () => {
    if (statToSpeak) {
      const speech = new SpeechSynthesisUtterance(statToSpeak);
      speech.lang = selectedLanguage === 'es' ? 'es-ES' : 'en-US';
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div>
      <Carousel />
      <Texts setTextToSpeak={setTextToSpeak}/>
      {/* <LanguageSelector onChange={handleLanguageChange} /> */}
      <button onClick={handleSpeak}>Read Text</button>
      <Stats setStatToSpeak={setStatToSpeak}/>
      <button onClick={handleStatsSpeak}>Read Stats</button>
      <Video />
      <div className="newsletter-container">
        <h2 className="stat-container-header">STAY CONNECTED!</h2>
        <a className="text-body-1-a">JOIN OUR NEWSLETTER {`>`}</a>
      </div>
    </div>
  );
};

export default HomePage;
