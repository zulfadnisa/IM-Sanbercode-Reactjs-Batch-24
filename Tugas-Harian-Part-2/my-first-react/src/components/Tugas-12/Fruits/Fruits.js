import React from "react";
import FruitsTable from "./FruitsTable";
import "./Fruits.css";

class Fruits extends React.Component {
  render() {
    return (
      <div className="fruits">
        <h2>Daftar Harga Buah</h2>
        <FruitsTable items={this.props.items} />
      </div>
    );
  }
}
export default Fruits;
