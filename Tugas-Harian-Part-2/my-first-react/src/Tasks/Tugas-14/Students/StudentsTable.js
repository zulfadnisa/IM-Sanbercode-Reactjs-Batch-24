import React from "react";
import StudentsTableItem from "./StudentsTableItem";
import { StudentsContext } from "../Context/StudentsContext";
import "./StudentsTable.css";

const StudentsTable = () => {
  const [students] = React.useContext(StudentsContext);
  return (
    <>
      <h2>Daftar Nilai Mahasiswa</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <StudentsTableItem
                key={student.id}
                data={student}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default StudentsTable;
