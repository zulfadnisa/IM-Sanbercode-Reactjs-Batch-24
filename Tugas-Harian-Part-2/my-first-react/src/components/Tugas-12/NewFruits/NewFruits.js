import React from "react";
import FruitsForm from "./FruitsForm";
import './NewFruits.css';

class NewFruits extends React.Component {
  saveNewFruitsHandler = (data) => {
    const newFruitsData = {
      ...data,
      //   id: Math.random().toString()
    };
    this.props.addNewFruits(newFruitsData);
  };
  render() {
    return (
      <div className='fruits-form'>
        <h2>Form Daftar Harga Buah</h2>
        <FruitsForm saveNewFruits={this.saveNewFruitsHandler} />
      </div>
    );
  }
}
export default NewFruits;
