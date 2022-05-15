import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../contexts/DataContext";

function Weather() {
  const { weatherInfo } = useContext(DataContext);
  return (
    <div className="weathers-container">
      {weatherInfo.map((weather) => {
        const { id } = weather;
        console.log(weather);
        return <Card weather={weather} key={id} />;
      })}
    </div>
  );
}

export default Weather;
