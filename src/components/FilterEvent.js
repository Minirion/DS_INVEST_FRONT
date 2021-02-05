import React, { Component } from "react";

import CardEvent from "./CardEvent";

class Filtre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      chosenTheme: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ chosenTheme: event.target.value });
  }

  render() {
    const chosenTheme = this.state;
    const eventList = this.props.eventList;

    return (
      <>
      {console.log(this.state.theme)},
      {console.log(eventList, "EVENT LIST ON FILTER EVENT")}
      <label htmlFor="theme-choice">
      <select value={chosenTheme} onChange={this.handleChange} name="Thème">
      <option value="">-</option>
        <option value="Immobilier">Immobilier</option>
        <option value="Dev. Perso">Développement Personnel</option>
        <option value="Tips">Tips</option>
      </select>
    </label>
    <div className="box-card">
      {this.state.chosenTheme === "" ? (
      eventList
      .map((eventList) => (
    <CardEvent  
              key={eventList.id}
              name={eventList.name_event}
              description={eventList.description}
              date={eventList.date}
              theme={eventList.theme}
              />
      ))
      ) : (
        eventList
      .filter(
        (theme => (theme.theme === this.state.chosenTheme) ))
      .map((eventList) => (
    <CardEvent  
              key={eventList.id}
              name={eventList.name_event}
              description={eventList.description}
              date={eventList.date}
              theme={eventList.theme}
              />
      )
      ))}
    </div>
  </>
    );
  }
}

export default Filtre;