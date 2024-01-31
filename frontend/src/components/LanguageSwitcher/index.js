import React from "react";

const LanguageSelector = ({ onChange }) => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    onChange(selectedLanguage);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Select Language:</label>
      <select id="language-select" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
