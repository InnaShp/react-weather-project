import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">
        Monday
      </div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max fw-bold">{Math.round(props.data.temp.max)}</span>°
        {" "}
        <span className="forecast-temperature-min">{Math.round(props.data.temp.min)}</span>°
      </div>
    </div>
  )
}