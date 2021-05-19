import React from "react";
import FruitTableItem from "./FruitTableItem";
import './FruitsTable.css'

class FruitsTable extends React.Component {
  render() {
    return (
      <div className='fruits-table'>
        <table>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per kg</th>
            <th>Aksi</th>
          </tr>
          {this.props.items.map((fruit, index) => {
            return (
              <FruitTableItem
                key={index}
                index={index + 1}
                nama={fruit.nama}
                harga={fruit.hargaTotal}
                berat={fruit.beratTotal}
              />
            );
          })}
        </table>
      </div>
    );
  }
}
export default FruitsTable;
