import React from "react";
import StudentsTable from "./StudentsTable";
import NewStudent from "../NewStudent/NewStudent";
import axios from "axios";

const Students = (props) => {
  const [students, setStudents] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editData, setEditData] = React.useState({
    id: "",
    name: "",
    course: "",
    score: "",
  });
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://backendexample.sanbercloud.com/api/student-scores`
      );

      setStudents(
        result.data.map((x) => {
          return {
            id: x.id,
            name: x.name,
            course: x.course,
            score: x.score,
            indexScore: toScoreIndex(x.score),
          };
        })
      );
    };
    fetchData();
  }, []);

  const toScoreIndex = (score) => {
    let index;
    if (score >= 80) {
      index = "A";
    } else if (score >= 50 && score < 80) {
      if (score < 60) {
        index = "D";
      } else if (score < 70) {
        index = "C";
      } else {
        index = "B";
      }
    } else {
      index = "E";
    }
    return index;
  };

  const addStudentHandler = (student, currentId) => {
    if (currentId === "") {
      axios
        .post(
          `http://backendexample.sanbercloud.com/api/student-scores`,
          student
        )
        .then((res) => {
          let data = res.data;
          setStudents([
            ...students,
            {
              id: data.id,
              name: data.name,
              course: data.course,
              score: data.score,
              indexScore: toScoreIndex(data.score),
            },
          ]);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          student
        )
        .then(() => {
          let updateStudent = students.find((data) => data.id === currentId);
          updateStudent.name = student.name;
          updateStudent.course = student.course;
          updateStudent.score = student.score;
          updateStudent.indexScore = toScoreIndex(student.score);
          setStudents([...students]);
        });
    }
  };
  const addDeleteHandler = (idStudent) => {
    axios
      .delete(
        ` http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`
      )
      .then(() => {
        let updatedStudents = students.filter((el) => {
          return el.id !== idStudent;
        });
        setStudents(updatedStudents);
      });
  };
  const addEditHandler = (index) => {
    setIsEditing(true);
    setEditData({
      id: students[index].id,
      name: students[index].name,
      course: students[index].course,
      score: students[index].score,
    });
  };
  return (
    <>
      <StudentsTable
        items={students}
        addDelete={addDeleteHandler}
        addEdit={addEditHandler}
      />
      <NewStudent
        addNewStudent={addStudentHandler}
        statusEdit={isEditing}
        dataEdit={editData}
      />
    </>
  );
};
export default Students;
