import React from "react";
import StudentForm from "./StudentForm";
// import { StudentEditContext } from "../Context/StudentEditContext";
// import Button from "../../UI/Button";

const NewStudent = (props) => {
  const toScoreIndex = (score) => {
    let index;
    if (score >= 50 && score < 80) {
      if (score < 60) {
        index = "D";
      } else if (score < 70) {
        index = "C";
      } else {
        index = "B";
      }
    } else if (score >= 80) {
      index = "A";
    } else {
      index = "E";
    }
    return index;
  };
  // const [editData, setEditData] = React.useContext(StudentEditContext);
  // const startEditingHandler = () => {
  //   if (editData.isEditing === false) {
  //     setEditData({
  //       id: "",
  //       name: "",
  //       course: "",
  //       score: "",
  //       isEditing: true,
  //     });
  //   }
  // };
  // const stopEditingHandler = () => {
  //   setEditData({
  //     id: "",
  //     name: "",
  //     course: "",
  //     score: "",
  //     isEditing: false,
  //   });
  // };
  // const addIndex = (score) => {
  //   return props.toIndex(score);
  // };

  return (
    <>
      {/* {editData.isEditing && (
        <StudentForm addIndex={addIndex} cancel={stopEditingHandler} />
      )} */}
      {/* {!editData.isEditing && (
         <Button type="submit" onClick={startEditingHandler}>
           Buat daftar nilai mahasiswa baru
         </Button>
       )} */}
      <StudentForm addIndex={toScoreIndex} />
    </>
  );
};

export default NewStudent;
