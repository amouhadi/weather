import React, {Component} from 'react';
import {connect} from 'react-redux';

import CurrentWeather from '../components/current_weather'
import ForecastWeather from '../components/forecast_weather';

class WeatherList extends Component {
    render() {
        const {current, forecast} = this.props.weather || {}
        return (
            <div className="city">
                <div className="current-city">
                    <CurrentWeather
                        currentData={current}
                    />
                </div>
                <ForecastWeather
                    forecastData={forecast}
                />
            </div>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);