import React from "react";
import FruitsForm from "./FruitsForm";
import "./NewFruits.css";

const NewFruits = (props) => {
  const saveNewFruitsHandler = (data,index) => {
    const newFruitsData = {
      ...data,
      //   id: Math.random().toString()
    };
    props.addNewFruits(newFruitsData,index);
  };
  let data = {
    nama: '',
    hargaTotal: '',
    beratTotal: '',
  };
  if (props.statusEdit === true) {
    data.nama = props.dataEdit.nama;
    data.hargaTotal = props.dataEdit.harga;
    data.beratTotal = props.dataEdit.berat;
  }
  return (
    <div className="fruits-form">
      <h2>Form Daftar Harga Buah</h2>
      <FruitsForm
        saveNewFruits={saveNewFruitsHandler}
        data = {data}
        index = {props.dataEdit.index}
      />
    </div>
  );
};
export default NewFruits;
