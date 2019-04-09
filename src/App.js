import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from "axios/index";
import './style/App.css';
import WeatherIcon from "./components/WeatherIcon"
import DateButton from "./components/DateButton"
import {CurrentDate} from "./utils"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: 0,
            days: [],
        }
    };

    componentDidMount() {
        axios
            .get("https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/\n" +
                "eaa544aed7e3bdee37c6caa2a515f1d4c38fbd4f/weather.json")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    days: response.data.list,
                })
            })
            .catch((error) => {
                alert("Не удалось загрузить данные по погоде");
            })
    }

    changeActiveButton = (id) => {
        this.setState({
            activeButton: id
        })
    };

    render() {
        const buttons = this.state.days.map((obj, index) => {
            return (
                <Col key={index}>
                    <DateButton isPressed={this.state.activeButton === index}
                                id={index}
                                parent={this}
                                day={CurrentDate(obj.dt)}
                                main={obj.weather[0].main}
                    />
                </Col>
            );
        });
        const currentDay = this.state.days[this.state.activeButton];
        if (this.state.days.length === 0) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div className="forecast">
                <div className={"weather"}>
                    <div className={"date-headline"}>
                        <div>
                            {CurrentDate(currentDay.dt, this.state.activeButton)}
                        </div>
                    </div>
                    <div className={"weather-topic"}>
                        Переменная облачность
                    </div>
                    <div className={"weather-icon"}>
                        <div className={"circle1"}>
                            <div className={"circle2"}>
                                <div className={"circle3"}>
                                    <div className={"circle4"}>
                                        <div className={"circle5"}>
                                            <WeatherIcon name={currentDay.weather[0].main.toLowerCase()}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"weather-temp"}>
                        {Math.round(currentDay.temp.day - 273.15)}
                        <sup style={{fontSize: "0.7em"}}>
                            °
                        </sup>
                    </div>
                    <div className={"weather-city"}>
                        Казань
                    </div>
                    <div className={"buttons"}>
                        <Row>
                            {buttons}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
