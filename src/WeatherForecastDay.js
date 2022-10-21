import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day mb-2">
        {day()}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max fw-bold">{Math.round(props.data.temp.max)}</span>°
        {" "}
        <span className="forecast-temperature-min">{Math.round(props.data.temp.min)}</span>°
      </div>
    </div>
  )
}