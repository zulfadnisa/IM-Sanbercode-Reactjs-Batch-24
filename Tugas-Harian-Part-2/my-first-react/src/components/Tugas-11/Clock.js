import React from "react";

class Clock extends React.Component {
  componentWillUnmount() {
    clearInterval(this.props.clockId);
  }
  render() {
    return (
      <div>
        <h2>Sekarang jam - {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;
