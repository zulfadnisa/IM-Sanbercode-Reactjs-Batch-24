import React from "react";
import FruitTableItem from "./FruitTableItem";
import styles from "../../UI/FruitsTable.module.css";
import Header from "../../UI/Header";
import Card from "../../UI/Card";

const FruitsTable = (props) => {
  return (
    <>
      <Header title="Daftar Harga Buah" />
      <Card className = {styles.fruits}>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga Total</th>
              <th>Berat Total</th>
              <th>Harga per kg</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((fruit, index) => {
              return (
                <FruitTableItem
                  key={index}
                  index={index}
                  nama={fruit.nama}
                  harga={fruit.hargaTotal}
                  berat={fruit.beratTotal}
                  saveDelete={props.addDelete}
                  saveEdit={props.addEdit}
                />
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};
export default FruitsTable;
