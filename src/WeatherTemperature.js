import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemperature(props) {
  const[unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertFahrenHeit() {
    return (props.data.temperature * 9)/5+32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2> 
          <WeatherIcon code={props.data.icon} /> 
          {Math.round(props.data.temperature)}
          <span className="unit">
            °C | 
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2> 
          <WeatherIcon code={props.data.icon} /> 
          {Math.round(convertFahrenHeit())}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a> {" "} | °F
          </span>
        </h2>
      </div>
    );
  }
  
}