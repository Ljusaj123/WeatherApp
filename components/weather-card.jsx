/* eslint-disable @next/next/no-img-element */
import { MdOutlineClose } from "react-icons/md";

const Card = ({ props, funkcija }) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="card-container">
      <div className="image-container">
        {props.main.temp >= 16 ? (
          <img src="/warm-bg.jpg" alt="aaa" />
        ) : (
          <img src="/cold-bg.jpg" alt="aaa" />
        )}
      </div>

      <div className="text-container">
        <div className="close-container" onClick={(e) => funkcija(e)}>
          <MdOutlineClose />
        </div>
        <div className="city-info">
          <h2>
            {props.name}, {props.sys.country}
          </h2>
          <h4>{dateBuilder(new Date())}</h4>
        </div>
        <div className="weather-container">
          <div className="weather-info-container">
            <p>Temeperature:</p>
            <p>{Math.round(props.main.temp)}&deg;</p>
          </div>
          <div className="weather-info-container">
            <p>Humidity:</p>
            <p>{props.main.humidity}</p>
          </div>
          <div className="weather-info-container">
            <p>Pressure:</p>
            <p>{props.main.pressure}</p>
          </div>
          <div className="weather-info-container">
            <p>Weather:</p>
            <p>{props.weather[0].description}</p>
          </div>
          <div className="weather-info-container">
            <p>Wind:</p>
            <p>{props.wind.speed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
