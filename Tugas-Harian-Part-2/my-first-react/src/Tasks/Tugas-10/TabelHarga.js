import React from "react";
import "./TabelHarga.css";

class TabelHarga extends React.Component {
  render() {
    return (
      <>
        <div className="component">
          <h1>Tabel Harga Buah</h1>
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((el) => {
                return (
                  <tr>
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat / 1000} kg</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default TabelHarga;
