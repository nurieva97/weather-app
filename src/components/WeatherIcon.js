import React from "react"
import {OPTIONS} from './utils.js'

const WeatherIcon = (props) =>{
    return OPTIONS[props.name]
};

export default WeatherIcon;