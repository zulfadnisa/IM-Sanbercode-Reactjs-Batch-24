import React from "react";
import StudentsTableItem from "./StudentsTableItem";
import styles from "../../UI/StudentsTable.module.css";
import Header from "../../UI/Header";
import Card from "../../UI/Card";

const StudentsTable = (props) => {
  return (
    <>
      <Header title="Daftar Nilai Mahasiswa" />
      <Card className={styles["students-table"]}>
        <table>
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
      </Card>
    </>
  );
};
export default StudentsTable;
