import React from "react";
import "./StudentsTableItem.css";
import axios from "axios";
import {
  StudentsContext
} from "../Context/StudentsContext";
import { StudentEditContext } from "../Context/StudentEditContext";

const StudentsTableItem = (props) => {
  const [students, setStudents] = React.useContext(StudentsContext);
  const [editData,setEditData] = React.useContext(StudentEditContext);

  const addEditHandler = () => {
    setEditData({
      id: props.data.id,
      name: props.data.name,
      course: props.data.course,
      score: props.data.score,
      isEditing: true
    });
  };

  const addDeleteHandler = () => {
    axios
      .delete(
        ` http://backendexample.sanbercloud.com/api/student-scores/${props.data.id}`
      )
      .then(() => {
        let updatedStudents = students.filter((el) => {
          return el.id !== props.data.id;
        });
        setStudents(updatedStudents);
      });
  };
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.data.name}</td>
      <td>{props.data.course}</td>
      <td>{props.data.score}</td>
      <td>{props.data.indexScore}</td>
      <td>
        <span>
          <button type="submit" onClick={addEditHandler}>
            Edit
          </button>
        </span>
        <span>
          <button type="submit" onClick={addDeleteHandler}>
            Delete
          </button>
        </span>
      </td>
    </tr>
  );
};
export default StudentsTableItem;
