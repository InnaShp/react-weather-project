import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">
            Thursday
          </div>
          <div className="forecast-icon">
            ☀️
          </div>
          <div className="forecast-temperature">
            <span className="forecast-temperature-max fw-bold">
              17°
            </span>
            <span className="forecast-temperature-min">
              10°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  
}