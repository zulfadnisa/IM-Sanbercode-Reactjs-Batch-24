import React from "react";
import { StudentsProvider } from "../Context/StudentsContext";
import { StudentEditProvider } from "../Context/StudentEditContext";
import StudentsTable from "./StudentsTable";
import NewStudent from "../NewStudent/NewStudent";

const Students = () => {
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
  return (
    <>
      <StudentsProvider toIndex={toScoreIndex}>
        <StudentEditProvider>
          <StudentsTable />
          <NewStudent toIndex={toScoreIndex} />
        </StudentEditProvider>
      </StudentsProvider>
    </>
  );
};
export default Students;
