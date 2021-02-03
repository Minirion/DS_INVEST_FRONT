import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventList from "./EventList";

function App() {
  return (
    <>
    <Router>
    <div className="menu">
      <Link to="/eventslist">
        Découvrir events
      </Link>
    </div>

    <div className="App">
      <Switch>
        <Route exact path="/eventslist">
          <EventList />
        </Route>
      </Switch>
    </div>
  </Router>
</>
);
}

export default App;
