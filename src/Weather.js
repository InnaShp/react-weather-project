import React, {useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      name: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity(){
    let apiKey = "9ad78e7db9272efcf0a75aa55efdcd5a";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-11">
              <input type="search" className="form-control" placeholder="Type a city.." onChange={updateCity} />
            </div>
            <div className="col-1">
              <button className="search-button" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return "Loading..."; 
  }
}