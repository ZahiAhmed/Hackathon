import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import AboutPage from "./components/AboutPage"

function App() {
  return (
    <>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={HomePage} />
      <Route exact path ="/about" component={AboutPage} />
      {/* Add other routes as needed */}
    </Switch>
    <Footer></Footer>
    <DarkModeToggle />
    </>

  );
}

export default App;
