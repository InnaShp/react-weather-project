import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Weather defaultCity="Kyiv" />
      </div>
      <footer>
          This project was coded by Inna Shpachynska and is{" "}
          <a
            href="https://github.com/InnaShp/react-weather-project" 
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://legendary-stroopwafel-58bdfa.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    </div>
  );
}


