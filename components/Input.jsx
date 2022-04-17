import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function Input() {
  const { query, setQuery, search, town } = useContext(DataContext);
  return (
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
  );
}

export default Input;
