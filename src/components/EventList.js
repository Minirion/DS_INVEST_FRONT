import React from "react";
import axios from "axios";

class StartupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
    };
  }

  componentDidMount() {
    axios
      .get("api/eventslist")
      .then((res) => {
        const eventList = res.data;
        this.setState({ eventList });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state);
  }

  render() {
    const eventList = this.state.eventList;
    console.log(eventList);
    return (
      <>
          {eventList.map((event) => (
                  <h3>
                    {event.event_name}
                  </h3>
          ))
  }
      </>
    );
  }
}

export default StartupList;