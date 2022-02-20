import React, { useState } from "react";
import Card from "../components/weather-card";

export default function Home() {

  const api ={
    key: "f624f11948d4be576b2ea253b7db39b4",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [query,setQuery]=useState('');
  const [town,setTown]=useState('Empty for now...');
  const [weatherInfo,setWeatherInfo]=useState({});



  const search =(e)=>{
    if(e.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(data=>data.json())
      .then(result => {
        setQuery('');
        setWeatherInfo(result);

        setTown(query + " not found");
      })
    }

  }
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
              onChange={e=>setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
        </div>
       
        {(typeof weatherInfo.main != "undefined") ? (
           <div className="weather-container">
              <Card props={weatherInfo}/>
          </div>) : (<p>{town}</p>)}

        
      

      </div>
      
      
    </div>
  )
}
