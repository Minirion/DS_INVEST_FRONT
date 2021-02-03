import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventList from "./EventList";

import './App.css';

function App() {
  return (
    <>
    <Router>
    <div className="menu">
      <Link to="/eventsList">
        Découvrir events
      </Link>
    </div>

    <div className="App">
      <Switch>
        <Route exact path="/eventsList">
          <EventList />
        </Route>
      </Switch>
    </div>
  </Router>
</>
);
}

export default App;
