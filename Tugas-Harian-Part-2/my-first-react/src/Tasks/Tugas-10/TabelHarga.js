import React from "react";
import styles from "../UI/TabelHarga.module.css";
import Card from "../UI/Card";

class TabelHarga extends React.Component {
  render() {
    return (
      <Card className={styles.table}>
        <div>
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
      </Card>
    );
  }
}
export default TabelHarga;
