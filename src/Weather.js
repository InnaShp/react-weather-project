import React, {useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({loaded:false});

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity(value){
    let apiKey = "9ad78e7db9272efcf0a75aa55efdcd5a";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }
  
  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6 text-start">
            <h1>{weatherData.name}</h1>
            <ul className="text-muted">
              <li>
                Saturday 15.00, <span className="text-lowercase">{weatherData.description}</span> 
              </li>
              <li>
                Humidity: {Math.round(weatherData.humidity)}%, 
                Wind: {Math.round(weatherData.wind)} km/h
              </li>
            </ul>
          </div>
          <div className="col-6">
            <h2>🌧 {Math.round(weatherData.temperature)} <span className="celsium">°C</span></h2>
          </div>
        </div>
      </div>
    );
  } else {
    searchCity("Lviv");
    return <div>Loading..</div>
  }
  
}