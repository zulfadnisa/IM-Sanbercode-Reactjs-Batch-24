import React from "react";
import axios from "axios";
import { StudentsContext } from "../Context/StudentsContext";
import { StudentEditContext } from "../Context/StudentEditContext";
import styles from "../../UI/StudentForm.module.css";
import ErrorModal from "../../Error/ErrorModal";
import Card from "../../UI/Card";
import Header from "../../UI/Header";
import Form from "../../UI/Form";
import Button from "../../UI/Button";
import { useHistory } from "react-router-dom";

function TableForm(props) {
  const nameInput = React.useRef();
  const courseInput = React.useRef();
  const scoreInput = React.useRef();
  const [students, setStudents] = React.useContext(StudentsContext);
  const [editData, setEditData] = React.useContext(StudentEditContext);
  const [error, setError] = React.useState();

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
    handleClick();
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newName = nameInput.current.value;
    const newCourse = courseInput.current.value;
    const newScore = scoreInput.current.value;
    if (
      newName.trim().length === 0 ||
      newCourse.trim().length === 0 ||
      newScore.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name, course and score (non-empty values).",
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
    nameInput.current.value = "";
    courseInput.current.value = "";
    scoreInput.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
    setEditData({
      id: "",
      name: "",
      course: "",
      score: "",
      isEditing: false,
    });
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
      <Header title="Form Nilai Mahasiswa" />
      <Card className={styles["student-form"]}>
        <Form onSubmit={submitHandler}>
          <div>
            <label>Nama </label>
            <input type="text" ref={nameInput} placeholder={editData.name} />
          </div>
          <div>
            <label>Mata Kuliah </label>
            <input
              type="text"
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
              ref={scoreInput}
              placeholder={editData.score}
            />
          </div>
          <div>
            <Button type="submit">SUBMIT</Button>
          </div>
          <div>
            <Button type="submit" onClick={handleClick}>
              Back
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
export default TableForm;
