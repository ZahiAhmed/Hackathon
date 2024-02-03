import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../LanguageSwitcher/LanguageContext"; 
import "./index.css";

const AboutPage = () => {

  // const [textToSpeak, setTextToSpeak] = useState("");
  const { selectedLanguage } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState({
    ourgoal: false,
    ecosystem: false,
    moreAboutUs: false
  });

  const speechSynthesisRef = useRef(null); // Ref to hold the speech synthesis instance
  
  useEffect(() => {
    return () => {
      const speech = speechSynthesisRef.current;
      if (speech) {
        window.speechSynthesis.cancel(); // Cancel the speech synthesis
        setIsSpeaking({
          ourgoal: false,
          ecosystem: false,
          moreAboutUs: false
        });
      }
    };
  }, [selectedLanguage]);
  
  
    const handleSpeak = (text, section) => {
      if (text) {
        const speech = new SpeechSynthesisUtterance(text);
        speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
        window.speechSynthesis.speak(speech);
        setIsSpeaking(prevState => ({ ...prevState, [section]: true })); 
      }
    };

  const handleStop = (section) => {
    window.speechSynthesis.cancel(); // Cancel the speech synthesis
    setIsSpeaking(prevState => ({ ...prevState, [section]: false })); // Set speaking state of the specific section to false
  };


  const content = {
    ourgoal: "Our goal. Five million people. When we target women as primary members of their households, we know they’ll reinvest in their families, communities and futures. For each woman with whom we partner, we reach a total of five people in the community. OUR MISSION. OUR VISION: A world free from extreme poverty. HOW WE DO IT: We partner with women in extreme poverty to build economic opportunity and drive inclusion. OUR VALUES: Respect, Collaboration, Commitment.",
    ecosystem:
      "The ecosystem. 650 million people live in extreme poverty. We can't solve this challenge alone. We work with incredible partners at different levels to support women forging pathways out of poverty.",
    moreAboutUs:
      "More About Us. When we identify communities with whom to partner, we know that marginalization raises costs of even the most basic resources. We look for sustainable change by investing in women, their families, and their futures. Our dedicated team comes from all over the world. We have teams based in Guatemala, Mexico, Uganda, and India, so we’re always close to the communities we serve.",
  };

  return (
    <div className="about-container">
      <div className="goal-container">
        <h4>OUR GOAL</h4>
        <h1>5 MILLION PEOPLE</h1>
        <p>
          When we target women as primary members of their households, we know
          they’ll reinvest in their families, communities and futures. For each
          woman with whom we partner, we reach a total of five people in the
          community.
        </p>
      </div>
      <div className="mission-container">
        <h1>OUR MISSION</h1>
        <div className="mission-flex">
          <div className="mission-cards">
            <h2>OUR VISION</h2>
            <p>A world free from extreme poverty</p>
          </div>
          <div className="mission-cards">
            <h2>HOW WE DO IT</h2>
            <p>
              We partner with women in extreme poverty to build economic
              opportunity and drive inclusion
            </p>
          </div>
          <div className="mission-cards">
            <h2>OUR VALUES</h2>
            <p>Respect</p>
            <p>Collaboration</p>
            <p>Commitment</p>
          </div>
        </div>
        {!isSpeaking.ourgoal ? (
          <button onClick={() => handleSpeak(content.ourgoal, 'ourgoal')}>Read Goals and Mission</button>
        ) : (
          <button onClick={() => handleStop('ourgoal')}>Stop</button>
        )}
      </div>

      <div className="ecosystem-container">
        <h1>THE ECOSYSTEM</h1>
        <p>
          650 million people live in extreme poverty. We can't solve this
          challenge alone.
        </p>
        <p>
          We work with incredible partners at different levels to support women
          forging pathways out of poverty.
        </p>
        {!isSpeaking.ecosystem ? (
          <button onClick={() => handleSpeak(content.ecosystem, 'ecosystem')}>Read Ecosystem</button>
        ) : (
          <button onClick={() => handleStop('ecosystem')}>Stop</button>
        )}
      </div>
      <div className="more-container">
        <h1>MORE ABOUT US</h1>
        <div className="more-flex">
          <p>
            When we identify communities with whom to partner, we know that
            marginalization raises costs of even the most basic resources. We
            look for sustainable change by investing in women, their families,
            and their futures.
          </p>
          <p>
            Our dedicated team comes from all over the world. We have teams
            based in Guatemala, Mexico, Uganda, and India, so we’re always close
            to the communities we serve.
          </p>
        </div>
        {!isSpeaking.moreAboutUs ? (
          <button onClick={() => handleSpeak(content.moreAboutUs, 'moreAboutUs')}>Read More About Us</button>
        ) : (
          <button onClick={() => handleStop('moreAboutUs')}>Stop</button>
        )}
      </div>
    </div>
  );
};

export default AboutPage;