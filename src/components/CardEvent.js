import React from "react";

import patrimoine from "../img/patrimoine.jpg";
import invest from "../img/invest.jpg";
import like from "../img/like.jpg";
import devperso from "../img/devperso.jpg";

import "../styles/CardEvent.css"; 

const CardEvent = ({ theme, date, description, name, key }) => {
  return (
    <>
    <div className="box-card-event"
        style={theme === "Immobilier" ? (
        {backgroundColor:"#931B62"} ) :
        theme === "Tips" ? (
        {backgroundColor:"#F266A5"} ) :
        theme === "Développement Personnel" ? (
        {backgroundColor:"#FAF263"} ) : (
        {backgroundColor:"#808080"} )}>
      <div className="box-img-card-event">
          {theme === "Immobilier" ? (
          <img className="img-card-event" src={patrimoine} alt={`img event patrimoine`} />) :
          theme === "Tips" ? (
          <img className="img-card-event" src={like} alt={`img event tips`} /> ) :
          theme === "Développement Personnel" ? (
          <img className="img-card-event" src={devperso} alt={`img event developpement personnel`} />) : (
          <img className="img-card-event" src={invest} alt={`img event patrimoine`} />) }
      </div>
      <p>{theme}</p>
      <h2>{name}</h2> 
      <p>{description}</p>
    </div>
    </>
  );
};

export default CardEvent;