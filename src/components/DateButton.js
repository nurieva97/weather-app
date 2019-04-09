import React, {Component} from "react"
import PropTypes from 'prop-types';
import WeatherIcon from "./WeatherIcon"

class DateButton extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        parent: PropTypes.object.isRequired,
        day: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
        isPressed: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            parent: this.props.parent,
        };
    }

    onCLick = () => {
        this.state.parent.changeActiveButton(this.props.id);
    };

    render() {
        return (
            <div
                className={"date-button"}
                style={this.props.isPressed || false ? {backgroundColor: "#1c9dd1"} : {}}
                onClick={this.onCLick}
            >
                <div className={"button-icon"}>
                    <WeatherIcon name={this.props.main.toLowerCase()}/>
                </div>
                <div className={"button-text"}>
                    {this.props.day}
                </div>
            </div>
        )
    }
}

export default DateButton;