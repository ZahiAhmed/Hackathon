import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <>
    <DarkModeToggle />
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={HomePage} />
      {/* Add other routes as needed */}
    </Switch>

    <Footer></Footer>
    </>

  );
}

export default App;
