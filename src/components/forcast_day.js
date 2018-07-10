import React from 'react';

const MONTH = {
    1:"Jan", 2:"Feb", 3:"Mar", 4:"Apr",
    5:"May", 6:"Jun", 7:"July", 8:"Aug",
    9:"Sep", 10:"Oct", 11:"Nov", 12:"Dec",
}

export default function ForecastDay({weather}){
    if(!weather.length){
        return null
    }

    const imgUrl =  `http://openweathermap.org/img/w/${weather[0].weather[0].icon}.png`;
    const date = new Date(weather[0].dt*1000)
    const day = date.getDate()
    const month= MONTH[date.getMonth()+1]
    const max = Math.max(...weather.map(({main})=> main.temp_max))
    const min = Math.min(...weather.map(({main})=> main.temp_min))
    return(
        <div className="days-container">
            <div className= "days-list-date">{ `${month} ${day}`}</div>
            <div className= "days-list-weather">
                <img src={imgUrl}/>
            </div>
            <div className= "days-list-max">{parseInt(max)}</div>
            <div className= "days-list-min">{parseInt(min)}</div>
        </div>
    );
}