import React from "react";

export default function Home() {

  const api ={
    key: "f624f11948d4be576b2ea253b7db39b4",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  return (
    <div className="app">
      <div className="app-container">
        <div className="info-container">
          <div className="title-container">
            <h1>Weather App</h1>
            <h3>Find out the weather in any city </h3>
          </div>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Search town..." 
            />
          </div>
        </div>
        <div className="weather-container"></div>
      

      </div>
      
      
    </div>
  )
}
