import React from "react";

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
        <td>{props.berat}</td>
        <td>{props.harga / 1000} kg</td>
        <td>
          <span>
            <button type="submit" onClick={checkDataEdit}>Edit</button>
          </span>
          <span>
            <button type="submit" onClick={checkDataDelete}>Delete</button>
          </span>
        </td>
      </tr>
    </>
  );
};
export default FruitTableItem;
