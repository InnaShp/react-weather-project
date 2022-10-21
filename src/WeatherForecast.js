import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);
  

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(forecastDay, index) {
              if (index < 5) {
                return(
                  <div className="col" key={index}>
                  <WeatherForecastDay data={forecastDay} />
                </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c03face7caa58a9b7ffa9f52b7238a93";
    let units = "metric";
    let longitude = props.data.lon;
    let latitude = props.data.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);

    return null;
  }
  
  
}