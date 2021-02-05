import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import patrimoine from "../img/patrimoine.jpg";
import invest from "../img/invest.jpg";
import like from "../img/like.jpg";
import devperso from "../img/devperso.jpg";

import "../styles/CardEvent.css"; 
import EventList from "./EventList";
import EventPresentation from "./EventPresentation";

const CardEvent = ({ theme, date, description, name, key }) => {
  return (
    <>
    <div className="box-card-event">
      <div className="box-img-card-event">
          {theme === "Immobilier" ? (
          <img className="img-card-event" src={patrimoine} alt={`img event patrimoine`} />) :
          theme === "Tips" ? (
          <img className="img-card-event" src={like} alt={`img event tips`} /> ) :
          theme === "Développement Personnel" ? (
          <img className="img-card-event" src={devperso} alt={`img event developpement personnel`} />) : (
          <img className="img-card-event" src={invest} alt={`img event patrimoine`} />) }
      </div>
      <p className="box-event-theme"
        style={theme === "Immobilier" ? (
        {backgroundColor:"#931B62"} ) :
        theme === "Tips" ? (
        {backgroundColor:"#F266A5"} ) :
        theme === "Dev. Perso" ? (
        {backgroundColor:"rgb(130 123 1)"} ) : (
        {backgroundColor:"#808080"} )}
        >{theme.toUpperCase()}</p>
      <h2 className="box-event-name">{name}</h2> 
      <p className="box-event-theme"
             style={theme === "Immobilier" ? (
              {color:"#931B62"} ) :
              theme === "Tips" ? (
              {color:"#F266A5"} ) :
              theme === "Dev. Perso" ? (
              {color:"rgb(130 123 1)"} ) : (
              {color:"#808080"} )}
      >_____________</p>
      <div className="box-wrap-event-description">
        <p className="box-event-description">{description}</p>
      </div>
      <button> 
      <Link to={`/event/${name}`}>Plus d'informations </Link>
      </button> 
    </div>
    </>
  );
};

export default CardEvent;