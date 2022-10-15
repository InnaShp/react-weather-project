import React from "react"; 
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
          <div className="col-6 text-start">
            <h1>{props.data.name}</h1>
            <ul className="text-muted">
              <li>
                Saturday 15.00, {props.data.description}
              </li>
              <li>
                Humidity: {Math.round(props.data.humidity)}%, 
                Wind: {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
          <div className="col-6">
            <WeatherTemperature data={props.data} />
          </div>
        </div>
    </div>
  );
}