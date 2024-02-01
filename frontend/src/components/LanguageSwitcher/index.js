import React, { useState, useEffect } from "react";

const LanguageSelector = ({ onChange }) => {
  
  const storedLanguage = localStorage.getItem("selectedLanguage");
  const [selectedLanguage, setSelectedLanguage] = useState(
    storedLanguage || "en"
  );

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onChange(newLanguage);
  };

  useEffect(() => {
    const updateSelectedLanguage = () => {
      const newStoredLanguage = localStorage.getItem("selectedLanguage");
      if (newStoredLanguage && newStoredLanguage !== selectedLanguage) {
        setSelectedLanguage(newStoredLanguage);
      }
    };

    window.addEventListener("storage", updateSelectedLanguage);

    return () => {
      window.removeEventListener("storage", updateSelectedLanguage);
    };
  }, [selectedLanguage]);

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
