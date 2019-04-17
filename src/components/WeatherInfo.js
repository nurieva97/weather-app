import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Icons, CurrentDate} from "./utils";


class WeatherInfo extends Component {
    static propTypes = {
        day: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired
    };

    render() {
        return (
            <div className={"weather-info"}>
                <div className={"date-headline"}>
                    <div>
                        {CurrentDate(this.props.day.dt, this.props.id)}
                    </div>
                </div>
                <div className={"weather-topic"}>
                    Переменная облачность
                </div>
                <div className={"weather-icon flex-container"}>
                    <div className={"circle1 flex-container"}>
                        <div className={"circle2 flex-container"}>
                            <div className={"circle3 flex-container"}>
                                <div className={"circle4 flex-container"}>
                                    <div className={"circle5"}>
                                        {Icons[this.props.day.weather[0].main.toLowerCase()]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"weather-temp"}>
                    {Math.round(this.props.day.temp.day - 273.15)}
                    <sup style={{fontSize: "0.7em"}}>
                        °
                    </sup>
                </div>
                <div className={"weather-city"}>
                    Казань
                </div>
            </div>
        )
    }
}

export default WeatherInfo;