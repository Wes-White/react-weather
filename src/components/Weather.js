import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Weather = props => {
  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle>
            <h1>{props.city}</h1>
            <img
              className="weather-img"
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt="weather icon"
            ></img>
          </CardTitle>
        </CardBody>

        <p>
          Actual Temp: {props.temp} Real Feel: {props.feel}
        </p>
        <p></p>
        <CardBody>
          <CardText>{props.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Weather;
