import React from "react";
import StudentForm from "./StudentForm";
import Header from '../../UI/Header'

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
    <>
      <Header title='Form Nilai Mahasiswa'/>
      <StudentForm saveNewStudent={props.addNewStudent} data={data} />
    </>
  );
};
export default newStudent;
