import React, { useState } from "react";
import Card from "../components/weather-card";
import getWeather from "../APIcalls/getWeather";
import seeDoubleFunction from "../utilities/seeDoubleFunction";
import DataContext from "../contexts/DataContext";
import Input from "../components/Input";

export default function Home() {
  const [query, setQuery] = useState("");
  const [town, setTown] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);

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
    <DataContext.Provider
      value={{
        weatherInfo,
        setWeatherInfo,
        town,
        query,
        setQuery,
        search,
      }}
    >
      <div className="app">
        <div className="app-container">
          <Input />
          <div className="weather-container">
            {weatherInfo.map((weather, index) => {
              return <Card weather={weather} key={index} />;
            })}
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}
