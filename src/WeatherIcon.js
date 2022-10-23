import React from "react";

import sunny from "./icons/sunny.png";
import partlyCloudy from "./icons/partly-cloudy.png";
import cloudy from "./icons/cloudy.png";
import night from "./icons/night.png";
import rain from "./icons/rain.png";
import snow from "./icons/snow.png";
import storm from "./icons/storm.png";
import mist from "./icons/mist.png";



export default function WeatherIcon(props) {
  const iconMatching = {
    "01d": sunny,
    "01n": night,
    "02d": partlyCloudy,
    "02n": partlyCloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": storm,
    "11n": storm,
    "13d": snow ,
    "13n": snow ,
    "50d": mist,
    "50n": mist
  };


  return (
    <div className="WeatherIcon">
      <img 
        src={iconMatching[props.code]} 
        alt="Sun" 
        width={props.size}
        className="d-inline"
      />
    </div>
  );
}