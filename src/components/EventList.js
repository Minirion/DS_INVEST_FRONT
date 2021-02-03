import React from "react";
import axios from "axios";

import CardEvent from "./CardEvent";

class StartupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
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

  render() {
    const eventList = this.state.eventList;
    console.log(eventList);
    return (
       <>
        <div className="box-card">
           {eventList.map((event) => (
             <CardEvent 
              key={event.ids}
              name={event.name_event}
              description={event.description}
              date={event.date}
              theme={event.theme}
              />
            ))
          }
        </div>
      </>
    );
  }
}

export default StartupList;