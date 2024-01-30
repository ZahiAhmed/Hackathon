import React from "react";
import { useColorScheme } from "./useColorScheme";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
    const { isDark, setIsDark } = useColorScheme();

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    const containerClassName = `dark-mode-toggle ${isDark ? "dark-mode" : ""} ${isDark ? "" : "light-mode"}`;


    return (
        <div className={containerClassName}>
            <button onClick={toggleDarkMode} aria-label="Dark mode toggle">
                <div className="slider"></div>
            </button>
        </div>
    );
};

export default DarkModeToggle;


