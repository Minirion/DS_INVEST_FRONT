import React, { useEffect, useState } from "react";
import axios from "axios";


import "../styles/CardEvent.css"; 

import patrimoine from "../img/patrimoine.jpg";
import invest from "../img/invest.jpg";
import like from "../img/like.jpg";
import devperso from "../img/devperso.jpg";


class EventPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: "",
      submitInscription: false,
      participationChoice: false,
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

    onClickParticipe = (e) => {
      e.preventDefault()
      this.setState({
        participationChoice: true,
      });
    };
  
    submitInscription = (e) => {
    e.preventDefault()
    // mettre le axios post
    this.setState({
      submitInscription: true,
    });
  
    alert(`Merci de participer à cet évènement !`);
  };

  render() {
    const eventInfo = this.state.event;
  return (
    <>
      <h1>{eventInfo.name_event}</h1>
      <div className="box-img-card-event">
          {eventInfo.theme === "Immobilier" ? (
            <img className="img-card-event" src={patrimoine} alt={`img event patrimoine`} />) :
            eventInfo.theme === "Tips" ? (
              <img className="img-card-event" src={like} alt={`img event tips`} /> ) :
              eventInfo.theme === "Développement Personnel" ? (
                <img className="img-card-event" src={devperso} alt={`img event developpement personnel`} />) : (
                  <img className="img-card-event" src={invest} alt={`img event patrimoine`} />) }
      </div>
      <p>{eventInfo.lieu}</p>
      <p>{eventInfo.theme}</p>
      <p>{eventInfo.description}</p>
      <p>{eventInfo.date}</p>
      <p>{eventInfo.number_participants}</p>
      <button onClick={this.onClickParticipe} >Participer à cet évènement</button>
      <form onSubmit={this.submitInscription} className={
                this.state.participationChoice === true
                  ? "inscription"
                  : "inscription-none"}>
        <label htmlFor="nom/prénom">
          <input type="text" name="Nom et Prénom" />
        </label>
        <label htmlFor="nom/prénom">
          <input type="text" name="Mail" />
        </label>
        <label htmlFor="nom/prénom">
          <input type="submit" name="Inscription" value="Je m'inscris" />
        </label>
      </form>
      <button className={
                this.state.submitInscription === true
                  ? "inscription"
                  : "inscription-none"
              }>
        <a target="_blank" href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${eventInfo.name_event}&dates=${eventInfo.date}&ctz=${eventInfo.lieu}`} > 
      Ajouter cet évènement à mon Angenda 
        </a>
      </button> 
    </>
  );
};
}

export default EventPresentation;