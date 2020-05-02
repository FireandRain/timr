import React from 'react'; 
import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Nav, Navbar} from 'react-bootstrap'


class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            seconds: 0,
            mseconds: 0,
            reset: 0,
        }
      }

      additionHandler = () => {
        var _this = this;
        this.incrementSeconds = setInterval(() => {
            this.setState({
                seconds: (_this.state.seconds + 1)
            });
        }, 1000);
        this.incrementMseconds = setInterval(() => {
            this.setState({
                mseconds: (_this.state.mseconds + 1)
            });
        }, 10);
        this.setState({
            disabled: true
        })
        };

        stopHandler = () => {
            clearInterval(this.incrementSeconds);
            clearInterval(this.incrementMseconds)
            this.setState({
                disabled: false,
            })
        };

        clearHandler = () => {
            this.setState({
                seconds: 0,
                mseconds: 0,
            })
        };

    render() {
        if (this.state.mseconds === 99) {
            this.setState({
                mseconds: 0,
            })
        }

        return(
            <div className="timer">
                <div className="timerNav">
                    <Navbar bg="light" expand="lg">
                        <div className="rightNav">
                            <Navbar.Brand href="#home">TIMR</Navbar.Brand>
                        </div>
                        <div className="leftNav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Sign In</Nav.Link>
                            </Nav>
                        </div>
                
                </Navbar>

            {/* timer heading and image  */}
                </div>
                <div class="text-center">
                    <img id="timerImg" src="https://image.flaticon.com/icons/svg/2055/2055991.svg" class="rounded" alt="..."/>
                </div>
                <div className="timerHeader">
                    <p>Welcome to <span className="spanTIMR">TIMR</span></p>
                </div>

            {/* Timer display */}
                <div className="timerDisplay">
                    <p className="seconds">{this.state.seconds}s</p>
                    <p className="mseconds">{this.state.mseconds}ms</p>
                </div>

            {/* timer buttons  */}
                <div className="timerButtons">
            {/* START  */}
                    <Button onClick={this.additionHandler} 
                            disabled={this.state.disabled}
                            enabled={this.state.disabled}
                            className="timerButton" 
                            variant="info">
                        Start
                    </Button>
            {/* STOP */}
                    <Button onClick={this.stopHandler} 
                            className="timerButton" 
                            variant="secondary">
                        Stop
                    </Button>
            {/* CLEAR */}
                    <Button onClick={this.clearHandler}
                            className="timerButton" 
                            variant="danger">
                        Clear
                    </Button>

                    </div>
            </div>
        )
    }
}
export default Timer 