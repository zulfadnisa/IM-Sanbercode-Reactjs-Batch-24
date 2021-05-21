import React from "react";
import StudentsTableItem from "./StudentsTableItem";
import { StudentsContext } from "../Context/StudentsContext";
import style from "../../UI/StudentsTable.module.css";
import Card from "../../UI/Card";
import Header from "../../UI/Header";

const StudentsTable = () => {
  const [students] = React.useContext(StudentsContext);
  return (
    <>
      <Header title="Daftar Nilai Mahasiswa" />
      <Card className={style["students-table"]}>
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
      </Card>
    </>
  );
};
export default StudentsTable;
