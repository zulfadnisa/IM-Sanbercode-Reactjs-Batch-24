import React from "react";

class FruitTableItem extends React.Component {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.index}</td>
          <td>{this.props.nama}</td>
          <td>{this.props.berat}</td>
          <td>{this.props.harga / 1000} kg</td>
          <td>
            <span>
              <button type="submit">Edit</button>
            </span>
            <span>
              <button type="submit">Delete</button>
            </span>
          </td>
        </tr>
      </>
    );
  }
}
export default FruitTableItem;
