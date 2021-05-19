import React from "react";
import "./FruitsForm.css";

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
    console.log(newFruitsData);
    props.saveNewFruits(newFruitsData);
    setNewNama("");
    setNewBerat("");
    setNewHarga("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nama : </label>
          <input type="text" value={newNama} onChange={namaChangeHandler} />
        </div>
        <div>
          <label>Harga total : </label>
          <input
            type="number"
            min="100"
            value={newHarga}
            onChange={hargaChangeHandler}
          />
        </div>
        <div>
          <label>Berat total(dalam gram) : </label>
          <input
            type="number"
            min="0"
            placeholder="0"
            value={newBerat}
            onChange={beratChangeHandler}
          />
        </div>
        <div className="fruits-form__button">
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
}
export default TableForm;
