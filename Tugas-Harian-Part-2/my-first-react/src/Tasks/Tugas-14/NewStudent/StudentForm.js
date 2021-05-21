import React from "react";
import axios from "axios";
import { StudentsContext } from "../Context/StudentsContext";
import { StudentEditContext } from "../Context/StudentEditContext";
import styles from "./StudentForm.module.css";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";

function TableForm(props) {
  const nameInput = React.useRef();
  const courseInput = React.useRef();
  const scoreInput = React.useRef();

  // const [newName, setNewName] = React.useState("");
  // const [newCourse, setNewCourse] = React.useState("");
  // const [newScore, setNewScore] = React.useState("");
  // const [isValid, setIsValid] = React.useState(true);
  const [students, setStudents] = React.useContext(StudentsContext);
  const [editData, setEditData] = React.useContext(StudentEditContext);
  const [error, setError] = React.useState();

  // const nameChangeHandler = (event) => {
  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }
  //   setNewName(event.target.value);
  // };
  // const courseChangeHandler = (event) => {
  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }
  //   setNewCourse(event.target.value);
  // };
  // const scoreChangeHandler = (event) => {
  //   if (event.target.value.trim().length > 0) {
  //     setIsValid(true);
  //   }
  //   setNewScore(event.target.value);
  // };
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
    const newName = nameInput.current.value;
    const newCourse = courseInput.current.value;
    const newScore = scoreInput.current.value;
    // if (
    //   newName.trim().length === 0 ||
    //   newCourse.trim().length === 0 ||
    //   newScore.trim().length === 0
    // ) {
    //   setIsValid(false);
    //   return;
    // }
    if (newName.trim().length === 0 || newCourse.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and course (non-empty values).",
      });
      return;
    } else if (+newScore > 100 || +newScore < 0) {
      setError({
        title: "Invalid score",
        message: "Please enter a valid score (must <100).",
      });
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
    // setNewName("");
    // setNewCourse("");
    // setNewScore("");
    nameInput.current.value = "";
    courseInput.current.value = "";
    scoreInput.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles["student-form"]}>
        <form onSubmit={submitHandler}>
          {/* <div
          className={`${styles["student-form"]} ${!isValid && styles.invalid}`}
        > */}
          <div>
            <label>Nama </label>
            <input
              type="text"
              // value={newName}
              // onChange={nameChangeHandler}
              ref={nameInput}
              placeholder={editData.name}
            />
          </div>
          <div>
            <label>Mata Kuliah </label>
            <input
              type="text"
              // value={newCourse}
              // onChange={courseChangeHandler}
              ref={courseInput}
              placeholder={editData.course}
            />
          </div>
          <div>
            <label>Nilai </label>
            <input
              type="number"
              max="100"
              min="0"
              // value={newScore}
              // onChange={scoreChangeHandler}
              ref={scoreInput}
              placeholder={editData.score}
            />
          </div>
          <div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </Card>
    </>
  );
}
export default TableForm;
