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
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null); // Ref to hold the speech synthesis instance

  useEffect(() => {
    const speech = speechSynthesisRef.current;
    if (speech) {
      window.speechSynthesis.cancel(); // Cancel the speech synthesis
      setIsSpeaking(false);
    }
  }, [selectedLanguage]);

  const handleSpeak = () => {
    if (textToSpeak) {
      const speech = new SpeechSynthesisUtterance(textToSpeak);
      speech.lang = selectedLanguage === 'es' ? 'es-ES' : 'en-US';
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  };

  const handleStatsSpeak = () => {
    if (statToSpeak) {
      const speech = new SpeechSynthesisUtterance(statToSpeak);
      speech.lang = selectedLanguage === 'es' ? 'es-ES' : 'en-US';
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  };

  const handleStop = () => {
    // Stop speech synthesis
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <Carousel />
      <Texts setTextToSpeak={setTextToSpeak}/>
      {/* <LanguageSelector onChange={handleLanguageChange} /> */}
      {isSpeaking ? (
        <button onClick={handleStop}>Stop</button> 
      ) : (
        <button onClick={handleSpeak}>Read Text</button>
      )}
      <Stats setStatToSpeak={setStatToSpeak}/>
      {isSpeaking ? (
        <button onClick={handleStop}>Stop</button> 
      ) : (
        <button onClick={handleStatsSpeak}>Read Stats</button>
      )}
      <Video />
      <div className="newsletter-container">
        <h2 className="stat-container-header">STAY CONNECTED!</h2>
        <a className="text-body-1-a">JOIN OUR NEWSLETTER {`>`}</a>
      </div>
    </div>
  );
};

export default HomePage;
