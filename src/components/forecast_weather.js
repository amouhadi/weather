import React from 'react';
import ForecastDay from '../components/forcast_day';

export default function ForecastWeather({forecastData}) {
    if (!forecastData) {
        return null
    }

    const daysData = []
    for (let i = 0; i <= 5; i++) {
        daysData.push(getDayData(i, forecastData.list))
    }
    if(!daysData[0].length) {
        daysData.shift()
    }

    return (
        <div className= "forecast-list">
            <ForecastDay
                weather={daysData[0]}
            />
            <div className= "vertical-line"></div>
            <ForecastDay
                weather={daysData[1]}
            />
            <div className= "vertical-line"></div>
            <ForecastDay
                weather={daysData[2]}
            />
            <div className= "vertical-line"></div>
            <ForecastDay
                weather={daysData[3]}
            />
            <div className= "vertical-line"></div>
            <ForecastDay
                weather={daysData[4]}
            />
        </div>
    );
}

function getDayData(threshold, list) {
    const dayToMilisecond = 24 * 60 * 60 * 1000
    return list.filter((li) => {
        const dateTime = li.dt * 1000
        const today = new Date()
        today.setSeconds(0)
        today.setMinutes(0)
        today.setHours(0)
        const tomorrow = new Date(today.getTime() + dayToMilisecond* threshold)
        const dayAfterTomorrow = new Date(today.getTime() + dayToMilisecond*(threshold + 1))
        return dateTime >= tomorrow.getTime() && dateTime < (dayAfterTomorrow.getTime()-1)
    })
}
