import React from "react";
import axios from "axios";
import { StudentsContext } from "../Context/StudentsContext";
import { StudentEditContext } from "../Context/StudentEditContext";
import styles from "./StudentForm.module.css";

function TableForm(props) {
  const [newName, setNewName] = React.useState("");
  const [newCourse, setNewCourse] = React.useState("");
  const [newScore, setNewScore] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);
  const [students, setStudents] = React.useContext(StudentsContext);
  const [editData, setEditData] = React.useContext(StudentEditContext);

  const nameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNewName(event.target.value);
  };
  const courseChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNewCourse(event.target.value);
  };
  const scoreChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setNewScore(event.target.value);
  };
  const addStudentHandler = (student, currentId) => {
    if (currentId === "") {
      axios
        .post(
          `http://backendexample.sanbercloud.com/api/student-scores`,
          student
        )
        .then((res) => {
          let data = res.data;
          setStudents([
            ...students,
            {
              id: data.id,
              name: data.name,
              course: data.course,
              score: data.score,
              indexScore: props.addIndex(data.score),
            },
          ]);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          student
        )
        .then(() => {
          let updateStudent = students.find((data) => data.id === currentId);
          updateStudent.name = student.name;
          updateStudent.course = student.course;
          updateStudent.score = student.score;
          // setStudents([...students]);
          setEditData({
            id: "",
            name: "",
            course: "",
            score: "",
            isEditing: false,
          });
        });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      newName.trim().length === 0 ||
      newCourse.trim().length === 0 ||
      newScore.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    const newStudent = {
      name: newName,
      course: newCourse,
      score: +newScore,
    };
    if (editData.isEditing === true) {
      addStudentHandler(newStudent, editData.id);
    } else {
      addStudentHandler(newStudent, "");
    }
    setNewName("");
    setNewCourse("");
    setNewScore("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles["student-form"]} ${!isValid && styles.invalid}`}
        >
          <div>
            <label>Nama </label>
            <input
              type="text"
              value={newName}
              onChange={nameChangeHandler}
              placeholder={editData.name}
            />
          </div>
          <div>
            <label>Mata Kuliah </label>
            <input
              type="text"
              value={newCourse}
              onChange={courseChangeHandler}
              placeholder={editData.course}
            />
          </div>
          <div>
            <label>Nilai </label>
            <input
              type="number"
              min="0"
              max="100"
              value={newScore}
              onChange={scoreChangeHandler}
              placeholder={editData.score}
            />
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default TableForm;
