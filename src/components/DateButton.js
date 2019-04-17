import React, {Component} from "react"
import PropTypes from 'prop-types';
import {Icons, CurrentDate} from "./utils"

class DateButton extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        parent: PropTypes.object.isRequired,
        day: PropTypes.object.isRequired,
        isPressed: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            parent: this.props.parent,
        };
    }

    onCLick = () => {
        this.state.parent.goTo(this.props.id);
    };

    render() {
        return (
            <div
                className={"date-button"}
                style={this.props.isPressed ? {backgroundColor: "#1c9dd1"} : {}}
                onClick={this.onCLick}
            >
                <div className={"button-icon"}>
                    {Icons[this.props.day.weather[0].main.toLowerCase()]}
                </div>
                <div className={"button-text"}>
                    {CurrentDate(this.props.day.dt)}
                </div>
            </div>
        )
    }
}

export default DateButton;