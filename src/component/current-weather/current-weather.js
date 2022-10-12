import "./current-weather.css";

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Marrakech</p>
                    <p className="weather-description">sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature">20°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-lebel">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Feels Like</span>
                        <span className="parameter-value">24°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Wind</span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Humidity</span>
                        <span className="parameter-value">15%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-lebel">Pressure</span>
                        <span className="parameter-value">15 hPa</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;