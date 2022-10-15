import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Weather defaultCity="Kyiv" />
      </div>
      <small><a href="https://github.com/InnaShp/react-weather-project" target="_blank" rel="noreferrer" className="git-link">Open-source code</a> , by Inna Shpachynska</small>
    </div>
  );
}


