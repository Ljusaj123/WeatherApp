import React, { useState } from "react";
import Card from "../components/weather-card";

export default function Home() {
  const api = {
    key: "f624f11948d4be576b2ea253b7db39b4",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [town, setTown] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const seeDouble = (result) => {
    return weatherInfo.find((a) => result.name === a.name) !== undefined
      ? 1
      : 0;
  };

  const removeCard = (e) => {
    const city = e.target.nextSibling.firstChild.innerHTML;
    setWeatherInfo(
      weatherInfo.filter((weather) => {
        return weather.name !== city.split(",")[0];
      })
    );
  };

  const search = (e) => {
    const query = e.target.value;
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((data) => data.json())
        .then((result) => {
          if (typeof result.main == "undefined") {
            setWeatherInfo([...weatherInfo]);
            setTown(query + " not found");
            setTimeout(() => setTown(""), 4000);
          } else if (seeDouble(result)) {
            console.log("aaa");
            setWeatherInfo([...weatherInfo]);
            setTown(query + " already exists");
            setTimeout(() => setTown(""), 4000);
          } else {
            setWeatherInfo([...weatherInfo, result]);
          }
          setQuery("");
        });
    }
  };
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
              onChange={handleChange}
              value={query}
              onKeyPress={search}
            />
            <p>{town}</p>
          </div>
        </div>
        <div className="weather-container">
          {weatherInfo.map((weather, index) => {
            return (
              <Card
                props={weather}
                array={weatherInfo}
                funkcija={removeCard}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
