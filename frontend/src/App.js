import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage"
import NavLink from "./components/NavLink";
// import LanguageSelector from "./components/LanguageSelector";
import { LanguageProvider } from "../src/components/LanguageSwitcher/LanguageContext";

function App() {
    useEffect(() => {
    const cleanupSpeechSynthesis = () => {
      window.speechSynthesis.cancel();
    };

    window.addEventListener('beforeunload', cleanupSpeechSynthesis);

    return () => {
      window.removeEventListener('beforeunload', cleanupSpeechSynthesis);
      cleanupSpeechSynthesis();
    };
  }, []);

  return (
    <LanguageProvider>
      <>
        <NavLink></NavLink>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          {/* Add other routes as needed */}
        </Switch>
        <Footer></Footer>
      </>
    </LanguageProvider>
  );
}

export default App;
