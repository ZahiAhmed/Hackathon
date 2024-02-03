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
  const [isTextSpeaking, setIsTextSpeaking] = useState(false);
  const [isStatsSpeaking, setIsStatsSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null); // Ref to hold the speech synthesis instance

  useEffect(() => {
    const speech = speechSynthesisRef.current;
    if (speech) {
      window.speechSynthesis.cancel(); // Cancel the speech synthesis
      setIsTextSpeaking(false);
      setIsStatsSpeaking(false);
    }
  }, [selectedLanguage]);

  const handleSpeak = () => {
    if (textToSpeak) {
      const speech = new SpeechSynthesisUtterance(textToSpeak);
      speech.lang = selectedLanguage === 'es' ? 'es-ES' : 'en-US';
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
      setIsTextSpeaking(true);
    }
  };

  const handleStatsSpeak = () => {
    if (statToSpeak) {
      const speech = new SpeechSynthesisUtterance(statToSpeak);
      speech.lang = selectedLanguage === 'es' ? 'es-ES' : 'en-US';
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
      setIsStatsSpeaking(true);
    }
  };

  const handleStop = () => {
    // Stop speech synthesis
    window.speechSynthesis.cancel();
    setIsTextSpeaking(false);
    setIsStatsSpeaking(false);
  };

  return (
    <div>
      <Carousel />
      <Texts setTextToSpeak={setTextToSpeak} />
      {/* <LanguageSelector onChange={handleLanguageChange} /> */}
      {isTextSpeaking ? (
        <button onClick={handleStop}>Stop</button> 
      ) : (
        <button onClick={handleSpeak}>Read Text</button>
      )}
      <Stats setStatToSpeak={setStatToSpeak}/>
      {isStatsSpeaking ? (
        <button onClick={handleStop}>Stop</button> 
      ) : (
        <button onClick={handleStatsSpeak}>Read Stats</button>
      )}
      <Video />
    </div>
  );
};

export default HomePage;
