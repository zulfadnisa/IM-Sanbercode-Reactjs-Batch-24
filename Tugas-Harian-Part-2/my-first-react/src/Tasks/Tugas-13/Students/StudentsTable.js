import React from "react";
import StudentsTableItem from "./StudentsTableItem";
import "./StudentsTable.css";

const StudentsTable = (props) => {
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
          {props.items.map((student, index) => {
            return (
              <StudentsTableItem
                key={student.id}
                id={student.id}
                index={index}
                name={student.name}
                course={student.course}
                score={student.score}
                indexScore={student.indexScore}
                saveDelete={props.addDelete}
                saveEdit={props.addEdit}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default StudentsTable;
