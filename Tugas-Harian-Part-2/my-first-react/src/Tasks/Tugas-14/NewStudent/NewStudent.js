import React from "react";
import StudentForm from "./StudentForm";
import "./NewStudent.css";
const newStudent = (props) => {
  const addIndex = (score) => {
    return props.toIndex(score);
  };
  return (
    <>
      <div className="students-form__header">
        <h2>Form Nilai Mahasiswa</h2>
      </div>
      <StudentForm addIndex={addIndex} />
    </>
  );
};
export default newStudent;
