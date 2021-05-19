import React from "react";
import styles from "./StudentForm.module.css";

function TableForm(props) {
  const [newName, setNewName] = React.useState("");
  const [newCourse, setNewCourse] = React.useState("");
  const [newScore, setNewScore] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

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
    if (props.data.id !== "") {
      for (const item in newStudent) {
        if (newStudent[item] === "") {
          newStudent[item] = props.data[item];
        }
      }
      props.saveNewStudent(newStudent, props.data.id);
    } else {
      props.saveNewStudent(newStudent, "");
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
            <label>Nama : </label>
            <input
              type="text"
              value={newName}
              onChange={nameChangeHandler}
              placeholder={props.data.name}
            />
          </div>
          <div>
            <label>Mata Kuliah : </label>
            <input
              type="text"
              value={newCourse}
              onChange={courseChangeHandler}
              placeholder={props.data.course}
            />
          </div>
          <div>
            <label>Nilai : </label>
            <input
              type="number"
              min="0"
              max="100"
              value={newScore}
              onChange={scoreChangeHandler}
              placeholder={props.data.score}
            />
          </div>
          <div className="student-form__button">
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
export default TableForm;
