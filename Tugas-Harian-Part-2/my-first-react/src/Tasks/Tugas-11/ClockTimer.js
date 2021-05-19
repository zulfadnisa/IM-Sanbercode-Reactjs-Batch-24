import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import "./ClockTimer.css";

class ClockTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timer: 0,
      hidden: false,
    };
  }
  componentDidMount() {
    this.clockId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);

    if (this.props.start !== "undefined") {
      this.setState({
        timer: this.props.start,
      });
    }
    this.timerId = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1,
      });
      this.checkTimerHandler(this.state.timer);
    }, 1000);
  }
  checkTimerHandler(current) {
    if (current < 0) {
      this.setState({
        hidden: true,
      });
    }
  }
  render() {
    return (
      <div className="component">
        <div className="show">
          <Clock date={this.state.date} clockId={this.clockId} />
        </div>
        <div className="show">
          {this.state.hidden ? null : (
            <Timer timer={this.state.timer} timerId={this.timerId} />
          )}
        </div>
      </div>
    );
  }
}
export default ClockTimer;
