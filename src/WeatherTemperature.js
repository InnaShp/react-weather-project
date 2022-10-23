import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {

  return (
    <div className="WeatherTemperature">
      <h2> 
        <WeatherIcon code={props.data.icon} size={100} /> 
        {Math.round(props.data.temperature)}
        <span className="unit">°C</span>
      </h2>
    </div>
  );
}