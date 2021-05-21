import React from "react";
import Button from '../../UI/Button'

const FruitTableItem = (props) => {

  const checkDataDelete = ()=>{
    props.saveDelete(props.index)
  }
  const checkDataEdit = ()=>{
    props.saveEdit(props.index)
  }
  return (
    <>
      <tr>
        <td>{props.index+1}</td>
        <td>{props.nama}</td>
        <td>{props.harga}</td>
        <td>{props.berat / 1000} kg</td>
        <td>{props.harga / (props.berat/1000)}</td>
        <td>
          <span>
            <Button onClick={checkDataEdit}>Edit</Button>
          </span>
          <span>
            <Button onClick={checkDataDelete}>Delete</Button>
          </span>
        </td>
      </tr>
    </>
  );
};
export default FruitTableItem;
