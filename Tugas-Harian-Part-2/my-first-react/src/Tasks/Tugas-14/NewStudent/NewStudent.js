import React from "react";
import StudentForm from "./StudentForm";
import "./NewStudent.css";

const newStudent = (props) => {
  const addIndex = (score) => {
    return props.toIndex(score);
  };
  return (
    <div className="students-form">
      <h2>Form Nilai Mahasiswa</h2>
      <StudentForm addIndex={addIndex} />
    </div>
  );
};
export default newStudent;
