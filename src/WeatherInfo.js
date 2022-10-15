import React from "react"; 

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
          <div className="col-6 text-start">
            <h1>{props.data.name}</h1>
            <ul className="text-muted">
              <li>
                Saturday 15.00, <span className="text-lowercase">{props.data.description}</span> 
              </li>
              <li>
                Humidity: {Math.round(props.data.humidity)}%, 
                Wind: {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
          <div className="col-6">
            <h2>🌧 {Math.round(props.data.temperature)} <span className="celsium">°C</span></h2>
          </div>
        </div>
    </div>
  );
}