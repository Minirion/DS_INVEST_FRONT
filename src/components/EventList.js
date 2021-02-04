import React from "react";
import axios from "axios";

import Filtre from "./FilterEvent";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      chosenTheme: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/eventslist")
      .then((res) => {
        const eventList = res.data;
        this.setState({ eventList });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state);
  }

  handleChangeTheme = (e) => {
    const newFilter = e.target.value;
    this.setState({
      chosenTheme: newFilter,
    });
  };

  render() {
    const chosenTheme = this.state.chosenTheme;

    return (
       <>
        <Filtre
          chosenTheme={chosenTheme}
          handleChange={this.handleChangeTheme}
          eventList={this.state.eventList}
        />
     </>
    );
  }
}

export default EventList;