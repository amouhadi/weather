import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    fetchCurrentWeather,
    fetchForecastWeather,
} from "../actions/index";

const DEFAULT_CITY= 'Seattle';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: DEFAULT_CITY};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.resetTerm = this.resetTerm.bind(this)
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
        event.preventDefault();
    }

    componentDidMount(){
        this.props.fetchCurrentWeather(this.state.term);
        this.props.fetchForecastWeather(this.state.term);
    }
    onFormSubmit(event) {
        event.preventDefault();
        //fetch weather data
        this.props.fetchCurrentWeather(this.state.term);
        this.props.fetchForecastWeather(this.state.term);

    }

    resetTerm(event) {
        event.preventDefault()
        this.setState({term: ''})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <span>
                    <i
                        className="btn fas fa-search"
                        onClick={this.onFormSubmit}
                    />
                </span>
                <input
                    placeholder="Type your city name in US"
                    className="search-bar"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span>
                    <i

                        value="Reset"
                        className="btn fas fa-times"
                        onClick={this.resetTerm}
                    />
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCurrentWeather, fetchForecastWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);