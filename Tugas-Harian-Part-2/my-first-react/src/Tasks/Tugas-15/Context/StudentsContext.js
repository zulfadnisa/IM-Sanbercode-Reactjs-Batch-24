import React from "react";
import axios from "axios";

export const StudentsContext = React.createContext();
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
  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
