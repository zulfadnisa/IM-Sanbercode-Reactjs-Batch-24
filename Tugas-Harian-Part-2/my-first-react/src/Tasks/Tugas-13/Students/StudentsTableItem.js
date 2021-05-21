import React from "react";
import Button from "../../UI/Button";

const StudentsTableItem = (props) => {
  const checkDataDelete = () => {
    props.saveDelete(props.id);
  };
  const checkDataEdit = () => {
    props.saveEdit(props.index);
  };
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.score}</td>
      <td>{props.indexScore}</td>
      <td>
        <span>
          <Button type="submit" onClick={checkDataEdit}>
            Edit
          </Button>
        </span>
        <span>
          <Button type="submit" onClick={checkDataDelete}>
            Delete
          </Button>
        </span>
      </td>
    </tr>
  );
};
export default StudentsTableItem;
