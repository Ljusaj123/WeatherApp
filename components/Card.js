import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import DataContext from "../contexts/DataContext";
import dateBuilder from "../utilities/dateBuilder";

const Card = ({ weather }) => {
  const { setWeatherInfo, weatherInfo } = useContext(DataContext);

  const removeCard = () => {
    setWeatherInfo(
      weatherInfo.filter((w) => {
        return w.id !== weather.id;
      })
    );
  };

  return (
    <div className="card-container">
      <div className="image-container">
        {weather.main.temp >= 16 ? (
          <img src="/warm-bg.jpg" alt="aaa" />
        ) : (
          <img src="/cold-bg.jpg" alt="aaa" />
        )}
      </div>

      <div className="text-container">
        <div className="close-container" onClick={() => removeCard()}>
          <MdOutlineClose />
        </div>
        <div className="city-info container">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <h4>{dateBuilder(new Date())}</h4>
        </div>
        <div className="weather container">
          <div className="weather-info-container">
            <p>Temeperature:</p>
            <p>{Math.round(weather.main.temp)}&deg;</p>
          </div>
          <div className="weather-info-container">
            <p>Humidity:</p>
            <p>{weather.main.humidity}</p>
          </div>
          <div className="weather-info-container">
            <p>Pressure:</p>
            <p>{weather.main.pressure}</p>
          </div>
          <div className="weather-info-container">
            <p>Weather:</p>
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="weather-info-container">
            <p>Wind:</p>
            <p>{weather.wind.speed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
