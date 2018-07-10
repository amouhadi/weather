import React from 'react';

export default function CurrentWeather({currentData}) {
    if (!currentData) {
        return null
    }

    const weather  = {...currentData.weather[0], ...currentData.main }
    const img = `http://openweathermap.org/img/w/${weather.icon}.png`;
    const backgroundImg = {
        backgroundImage: 'url(' + {img} + ')',
    }

    return (
        <div className="city-current-weather" style={backgroundImg}>
            <div className= "current-weather-temp">
                <div>{parseInt(weather.temp)}</div>
                <sup>&#8457;</sup>
            </div>
            <div className={ "current-weather-detail"}>
                <div className="city-description">{weather.description}</div>
                <div className="city-description">{ `${weather.humidity}% Humidity`}</div>
            </div>

        </div>
    );
}

