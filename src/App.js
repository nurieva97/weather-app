import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from "axios/index";
import './style/App.css';
import WeatherInfo from "./components/WeatherInfo"
import DateButton from "./components/DateButton"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            days: [],
            translateValue: 0
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

    goTo = (id) => {
        let {currentIndex} = this.state;
        if (currentIndex === id)
            return;

        if (currentIndex < id) {
            let diff = id - currentIndex;
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + diff,
                translateValue: prevState.translateValue + -(this.slideWidth() * diff)
            }));
        }

        if (currentIndex > id) {
            let diff = currentIndex - id;
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - diff,
                translateValue: prevState.translateValue + (this.slideWidth() * diff)
            }));
        }
    };

    slideWidth = () => {
        return document.querySelector('.weather-info').clientWidth
    };

    render() {
        if (this.state.days.length === 0) {
            return (
                <div>Loading...</div>
            );
        }
        const buttons = this.state.days.map((obj, index) => {
            return (
                <Col key={index}>
                    <DateButton isPressed={this.state.currentIndex === index}
                                id={index}
                                parent={this}
                                day={obj}
                    />
                </Col>
            );
        });
        const daysSlider = this.state.days.map((object, index) => {
            return (
                <WeatherInfo day={object}
                             key={index}
                             id={index}/>
            )
        });
        return (
            <div className="forecast">
                <div className={"weather"}>
                    <div className={"slider"}>
                        <div className="slider-wrapper"
                             style={{
                                 transform: `translateX(${this.state.translateValue}px)`,
                                 transition: 'transform ease-out 0.45s'
                             }}>
                            {daysSlider}
                        </div>
                    </div>

                </div>
                <div className={"buttons"}>
                    <Row>
                        {buttons}
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;