import React from "react";
import axios from "axios";

export const StudentsContext = React.createContext();
export const StudentEditContext = React.createContext();
export const StudentsProvider = (props) => {
  const [students, setStudents] = React.useState([]);
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
            indexScore: props.toIndex(x.score),
          };
        })
      );
    };
    fetchData();
  }, [props]);

  // const toScoreIndex = (score) => {
  //   let index;
  //   if (score >= 80) {
  //     index = "A";
  //   } else if (score >= 50 && score < 80) {
  //     if (score < 60) {
  //       index = "D";
  //     } else if (score < 70) {
  //       index = "C";
  //     } else {
  //       index = "B";
  //     }
  //   } else {
  //     index = "E";
  //   }
  //   return index;
  // };
  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
