import {MdOutlineClose} from 'react-icons/md';

const Card =(weather)=>{

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }

      const removeCard=(e)=>{
          const card=e.target.parentElement.parentElement;
          card.remove();

      }

    return (
            <div className="card-container">
                <div className="image-container">
                {weather.props.main.temp >= 16 ? 
                    (<img src="/warm-bg.jpg" alt="aaa" />) : 
                    (<img src="/cold-bg.jpg" alt="aaa" />)}
                
                </div>
        
            <div className="text-container">
                <div className="close-container" onClick={removeCard}>
                    <MdOutlineClose/>
                    
                </div>
                <div className="city-info">
                    <h2>{weather.props.name}, {weather.props.sys.country}</h2>
                    <h4>{dateBuilder(new Date())}</h4>
                </div>
                <div className="weather-container">
                <div className="weather-info-container">
                <p>Temeperature:</p>
                    <p>{Math.round(weather.props.main.temp)}&deg;</p>
                </div>
                <div className="weather-info-container">
                <p>Humidity:</p>
                    <p>{weather.props.main.humidity}</p>
                </div>
                <div className="weather-info-container">
                    <p>Pressure:</p>
                    <p>{weather.props.main.pressure}</p>
                </div>
                <div className="weather-info-container">
                    <p>Weather:</p>
                    <p>{weather.props.weather[0].description}</p>
                </div>
                <div className="weather-info-container">
                    <p>Wind:</p>
                    <p>{weather.props.wind.speed}km/h</p>
                </div>

                </div>
                

            </div>
            
           
            </div>

        
        
    )

}

export default Card;
