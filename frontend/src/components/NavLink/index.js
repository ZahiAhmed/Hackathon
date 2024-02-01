import React, { useEffect, useState } from "react";
import "./index.css";
import DarkModeToggle from "../DarkModeToggle";
import LanguageSelector from "../LanguageSwitcher";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";

const NavLink = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  return (
    <>
      <nav>
        <ul className="nav-links">
          <li className="link">
            <a href="/home">Home</a>
          </li>
          <li className="link">
            <a href="/about">About</a>
          </li>
          <li className="link">
            <a href="#">Link 3</a>
          </li>
          <DarkModeToggle />
          <LanguageSelector onChange={handleLanguageChange} />
        </ul>

        <button className="button">DONATE</button>
      </nav>
    </>
  );
};

export default NavLink;
