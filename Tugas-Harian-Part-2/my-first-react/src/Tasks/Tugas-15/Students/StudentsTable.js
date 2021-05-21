import React from "react";
import StudentsTableItem from "./StudentsTableItem";
import { StudentsContext } from "../Context/StudentsContext";
import style from "../../UI/StudentsTable.module.css";
import Header from "../../UI/Header";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { useHistory } from "react-router-dom";

const StudentsTable = () => {
  const [students] = React.useContext(StudentsContext);
  const history = useHistory();

  const handleClick = () => {
    history.push("/form");
  };
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
      <div className={style["go-form"]}>
        <Button onClick={handleClick} type="button">
          Go To Form
        </Button>
      </div>
    </>
  );
};
export default StudentsTable;
