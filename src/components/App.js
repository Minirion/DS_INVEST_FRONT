import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventList from "./EventList";
import EventPresentation from "./EventPresentation";

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    // eventName: "",
  };
}

handleChangeEventName = (e) => {
  const eventName = e.target.value;
  this.setState({
    eventName,
  });
};

render() {
  return (
    <>
    <Router>
    <div className="menu">
      <Link to="/events">
        Découvrir events
      </Link>
    </div>

    <div className="App">
      <Switch>
        <Route exact path="/events">
          <EventList />
        </Route>
        <Route path="/event/:name"
          component={EventPresentation} 
        />
      </Switch>
    </div>
  </Router>
</>
);
}
}

export default App;
