import React from "react";

class Timer extends React.Component {
  componentWillUnmount() {
    clearInterval(this.props.timerId);
  }
  render() {
    return (
      <div>
        <h2>hitung Mundur : {this.props.timer}</h2>
      </div>
    );
  }
}
export default Timer;
