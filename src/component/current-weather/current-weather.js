import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <div className="country-city">
                        <p className="city">{data.city}</p>
                        <p className="country">{data.sys.country}</p>
                    </div>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-lebel">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;