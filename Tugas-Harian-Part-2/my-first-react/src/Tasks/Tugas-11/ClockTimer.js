import React from "react";
import Clock from "./Clock";
import Timer from "./Timer";
import style from "../UI/ClockTimer.module.css";
import Card from "../UI/Card";

class ClockTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timer: 100,
      hidden: false,
    };
  }
  componentDidMount() {
    this.clockId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
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
      <Card className={style.show}>
        {this.state.hidden ? <p>
          Timer is stopped.
        </p> : (
          <div>
              <Clock date={this.state.date} clockId={this.clockId} />
            <Timer timer={this.state.timer} timerId={this.timerId} />
          </div>
        )}
      </Card>
    );
  }
}
export default ClockTimer;
