import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../contexts/DataContext";

function Weather() {
  const { weatherInfo } = useContext(DataContext);
  return (
    <div className="weathers-container">
      {weatherInfo.map((weather, index) => {
        return <Card weather={weather} key={index} />;
      })}
    </div>
  );
}

export default Weather;
