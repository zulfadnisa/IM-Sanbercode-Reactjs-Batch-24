import React from "react";

const StudentsTableItem = (props) => {

  const checkDataDelete = ()=>{
    props.saveDelete(props.id)
  }
  const checkDataEdit = ()=>{
    props.saveEdit(props.index)
  }
  return (
    <>
      <tr>
        <td>{props.index+1}</td>
        <td>{props.name}</td>
        <td>{props.course}</td>
        <td>{props.score}</td>
        <td>{props.indexScore}</td>
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
export default StudentsTableItem;
