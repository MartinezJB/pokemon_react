import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./pages/Game";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}
