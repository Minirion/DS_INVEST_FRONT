import React, { useEffect, useState } from "react";
import axios from "axios";


import "../styles/CardEvent.css"; 


class EventPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
    };
  }

  componentDidMount() {
    const name = this.props.match.params.name;
    axios
      .get(`http://localhost:5000/api/eventslist/${name}`)
      .then((res) => {
        const event = res.data[0];
        this.setState({ event });
        console.log(event);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const eventInfo = this.state.event;
  return (
    <>
      <h1>{eventInfo.name_event}</h1>

    </>
  );
};
}

export default EventPresentation;