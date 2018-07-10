
import axios from 'axios';

export const FETCH_CURRENT_WEATHER ='FETCH_CURRENT_WEATHER';
export const FETCH_FORECAST_WEATHER ='FETCH_FORECAST_WEATHER';

const API_KEY = '16d58233a520ca319188ef68bfefad44';
const ROOT_URL =`http://api.openweathermap.org/data/2.5`;
const CURRENT_WEATHER_API= `${ROOT_URL}/weather?appid=${API_KEY}&units=imperial`;
const FORECAST_WEATHER_API= `${ROOT_URL}/forecast?appid=${API_KEY}&units=imperial`;

export function fetchCurrentWeather(city) {
    const url = `${CURRENT_WEATHER_API}&q=${city},us`;
    const request = axios.get(url);
    return{
        type: FETCH_CURRENT_WEATHER,
        payload: request,
    };
}

export function fetchForecastWeather(city) {
    const url = `${FORECAST_WEATHER_API}&q=${city},us`;
    const request = axios.get(url);
    return{
        type: FETCH_FORECAST_WEATHER,
        payload: request,
    };
}
