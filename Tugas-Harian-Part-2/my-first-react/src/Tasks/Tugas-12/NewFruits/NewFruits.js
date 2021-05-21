import React from "react";
import FruitsForm from "./FruitsForm";
import Header from "../../UI/Header";

const NewFruits = (props) => {
  const saveNewFruitsHandler = (data, index) => {
    const newFruitsData = {
      ...data,
      //   id: Math.random().toString()
    };
    props.addNewFruits(newFruitsData, index);
  };
  let data = {
    nama: "",
    hargaTotal: "",
    beratTotal: "",
  };
  if (props.statusEdit === true) {
    data.nama = props.dataEdit.nama;
    data.hargaTotal = props.dataEdit.harga;
    data.beratTotal = props.dataEdit.berat;
  }
  return (
    <>
      <Header title="Form Daftar Harga Buah" />
      <FruitsForm
        saveNewFruits={saveNewFruitsHandler}
        data={data}
        index={props.dataEdit.index}
      />
    </>
  );
};
export default NewFruits;
