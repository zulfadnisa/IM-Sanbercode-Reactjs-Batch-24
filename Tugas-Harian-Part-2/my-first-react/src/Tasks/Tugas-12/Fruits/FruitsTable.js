import React from "react";
import FruitTableItem from "./FruitTableItem";
import "./FruitsTable.css";

const FruitsTable = (props) => {
  return (
    <div className="fruits-table">
      <h2>Daftar Harga Buah</h2>
      <table>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Harga Total</th>
          <th>Berat Total</th>
          <th>Harga per kg</th>
          <th>Aksi</th>
        </tr>
        {props.items.map((fruit, index) => {
          return (
            <FruitTableItem
              key={index}
              index={index}
              nama={fruit.nama}
              harga={fruit.hargaTotal}
              berat={fruit.beratTotal}
              saveDelete = {props.addDelete}
              saveEdit = {props.addEdit}
            />
          );
        })}
      </table>
    </div>
  );
};
export default FruitsTable;
