import React, { useState } from "react";
import Weather from "../components/Weather";
import DataContext from "../contexts/DataContext";
import Input from "../components/Input";

export default function Home() {
  const [weatherInfo, setWeatherInfo] = useState([]);

  return (
    <div className="app">
      <div className="app-container">
        <DataContext.Provider
          value={{
            weatherInfo,
            setWeatherInfo,
          }}
        >
          <Input />
          <Weather />
        </DataContext.Provider>
      </div>
    </div>
  );
}
