import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";

import "./App.css";
import Weather from "./components/Weather";

function App() {
  const APIKEY = "0faf43864ae9fb501559fd2c33a053fe";
  const [weather, setWeather] = useState([]);

  //useEffect hook to axios fetch here
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=93711,us&appid=${APIKEY}&units=imperial`
      )
      .then(res => {
        const data = res.data;
        setWeather({
          data: data,
          city: data.name,
          temperature: data.main.temp,
          realFeel: data.main.feels_like,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          error: ""
        });
      })

      .catch(err => console.log(err));
  }, []);

  //form that fetches

  return (
    <div className="App">
      {console.log(weather)}
      <Weather
        temp={weather.temperature}
        feel={weather.realFeel}
        city={weather.city}
        icon={weather.icon}
        description={weather.description}
      />
    </div>
  );
}

export default App;
