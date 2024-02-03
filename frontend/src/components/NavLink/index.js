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
      <div className="section1">
        <nav className="nav-container">
          <div className="logo">
            {/* <LanguageSelector onChange={handleLanguageChange} /> */}
            <p>Prospect International</p>
          </div>

          <div className="navlink">
            <ul>
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
              <a className="nav-button" href="#">
                Donate
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavLink;
