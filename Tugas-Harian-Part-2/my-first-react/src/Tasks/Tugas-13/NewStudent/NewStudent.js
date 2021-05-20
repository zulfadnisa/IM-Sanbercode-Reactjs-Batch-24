import React from "react";
import StudentForm from "./StudentForm";
import "./NewStudent.css";

const newStudent = (props) => {
  let data = {
    id: "",
    name: "",
    course: "",
    score: "",
  };
  if (props.statusEdit === true) {
    data.id = props.dataEdit.id;
    data.name = props.dataEdit.name;
    data.course = props.dataEdit.course;
    data.score = props.dataEdit.score;
  }
  return (
    <div className="students-form">
      <h2>Form Nilai Mahasiswa</h2>
      <StudentForm saveNewStudent={props.addNewStudent} data={data} />
    </div>
  );
};
export default newStudent;
