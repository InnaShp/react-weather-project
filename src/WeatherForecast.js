import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState("");
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9ad78e7db9272efcf0a75aa55efdcd5a";
    let units = "metric";
    let longitude = props.data.lon;
    let latitude = props.data.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);

    return null;
  }
  
  
}