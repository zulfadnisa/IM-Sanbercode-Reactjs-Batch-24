import React from "react";
import StudentForm from "./StudentForm";
import Header from "../../UI/Header";

const newStudent = (props) => {
  const addIndex = (score) => {
    return props.toIndex(score);
  };
  return (
    <>
      <Header title="Form Nilai Mahasiswa" />
      <StudentForm addIndex={addIndex} />
    </>
  );
};
export default newStudent;
