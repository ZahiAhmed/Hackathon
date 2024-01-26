import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DonatePage from "./components/DonatePage/DonatePage";

function App() {
  
  return (
    <Switch>
      <Route path="/home" />
      <Route path="/about" />
      <Route path="/donate" component={DonatePage} />
      <Route exact path= "/"/>
    </Switch>
  );
}

export default App;
