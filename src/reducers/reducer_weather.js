import {
    FETCH_FORECAST_WEATHER,
    FETCH_CURRENT_WEATHER,
} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_CURRENT_WEATHER:
            console.log('Current weather fetched', action.payload.data);
            return {...state, current: action.payload.data};
            break;
        case FETCH_FORECAST_WEATHER:
            console.log('Forecast weather fetched', action.payload.data);
            return {...state, forecast: action.payload.data};
    }
    return state;
}