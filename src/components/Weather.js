import React from "react";

const Weather = props => {
  return (
    <div className="weather">
      <h2>{props.city}</h2>
      <img
        className="weather-img"
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="weather icon"
      ></img>
      <p>
        Actual Temp: {props.temp}˚F Real Feel: {props.feel}˚F
      </p>
      <p>{props.description}</p>
    </div>
  );
};

export default Weather;
