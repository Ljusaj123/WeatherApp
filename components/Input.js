import { useState, useContext } from "react";
import getWeather from "../APIcalls/getWeather";
import seeDoubleFunction from "../utilities/seeDoubleFunction";
import DataContext from "../contexts/DataContext";
import { HalfMalf } from "react-spinner-animated";
import Header from "./Header";

import "react-spinner-animated/dist/index.css";

function Input() {
  const { setWeatherInfo, weatherInfo } = useContext(DataContext);
  const initialError = {
    isError: false,
    message: "",
  };
  const [query, setQuery] = useState("");
  const [error, setError] = useState(initialError);
  const [isLoading, setIsLoading] = useState(false);

  const search = (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      getWeather(query)
        .then((data) => {
          if (seeDoubleFunction(data, weatherInfo)) {
            setError({ isError: true, message: query + " already exists" });
            setTimeout(() => setError(initialError), 4000);
            setIsLoading(false);
          } else {
            setWeatherInfo([...weatherInfo, data]);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          setError({ isError: true, message: error.message });
          setTimeout(() => setError(initialError), 4000);
          setIsLoading(false);
        });
      setQuery("");
    }
  };

  if (isLoading) {
    return (
      <HalfMalf
        text={"Loading..."}
        center={true}
        width={"150px"}
        height={"150px"}
      />
    );
  }
  return (
    <div className="info-container">
      <Header />
      <div className="input-container">
        <input
          type="text"
          placeholder="Search town..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <p>{error.isError ? error.message : ""}</p>
      </div>
    </div>
  );
}

export default Input;
