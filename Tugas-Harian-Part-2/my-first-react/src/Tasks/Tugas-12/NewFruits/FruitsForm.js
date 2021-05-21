import React from "react";
import styles from "../../UI/FruitsForm.module.css";
import Card from "../../UI/Card";
import Form from "../../UI/Form";
import Button from "../../UI/Button";

function TableForm(props) {
  const [newNama, setNewNama] = React.useState("");
  const [newHarga, setNewHarga] = React.useState("");
  const [newBerat, setNewBerat] = React.useState("");

  const namaChangeHandler = (event) => {
    setNewNama(event.target.value);
  };
  const hargaChangeHandler = (event) => {
    setNewHarga(event.target.value);
  };
  const beratChangeHandler = (event) => {
    setNewBerat(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newFruitsData = {
      nama: newNama,
      hargaTotal: +newHarga,
      beratTotal: +newBerat,
    };
    let index = -1;
    if (props.index >= 0) {
      index = props.index;
      for (const item in newFruitsData) {
        if (newFruitsData[item] === "") {
          newFruitsData[item] = props.data[item];
        }
      }
    }
    props.saveNewFruits(newFruitsData, index);
    setNewNama("");
    setNewBerat("");
    setNewHarga("");
  };
  return (
    <Card>
      <Form onSubmit={submitHandler} className={styles['fruits-form']}>
        <div>
          <label>Nama : </label>
          <input
            type="text"
            value={newNama}
            onChange={namaChangeHandler}
            placeholder={props.data.nama}
          />
        </div>
        <div>
          <label>Harga total : </label>
          <input
            type="number"
            min="100"
            value={newHarga}
            onChange={hargaChangeHandler}
            placeholder={props.data.hargaTotal}
          />
        </div>
        <div>
          <label>Berat total(dalam gram) : </label>
          <input
            type="number"
            min="0"
            value={newBerat}
            onChange={beratChangeHandler}
            placeholder={props.data.beratTotal}
          />
        </div>
        <div>
          <Button type="submit">submit</Button>
        </div>
      </Form>
    </Card>
  );
}
export default TableForm;
