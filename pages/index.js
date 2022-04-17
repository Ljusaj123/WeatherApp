import React, { useState } from "react";
import Card from "../components/weather-card";
import getWeather from "../APIcalls/getWeather";
import seeDoubleFunction from "../utilities/seeDoubleFunction";

export default function Home() {
  const [query, setQuery] = useState("");
  const [town, setTown] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);

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
      getWeather(query)
        .then((data) => {
          if (seeDoubleFunction(data, weatherInfo)) {
            setTown(query + " already exists");
            setTimeout(() => setTown(""), 4000);
          } else {
            setWeatherInfo([...weatherInfo, data]);
          }
        })
        .catch((error) => {
          console.log("aaaa");
          setWeatherInfo([...weatherInfo]);
          setTown(error.message);
          setTimeout(() => setTown(""), 4000);
        });
      setQuery("");
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
              onChange={(e) => setQuery(e.target.value)}
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
