import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  
  return (
    <Switch>
      <Route path="/home" />
      <Route path="/about" />
      <Route path="/donate" />
      <Route exact path= "/"/>
    </Switch>
  );
}

export default App;
