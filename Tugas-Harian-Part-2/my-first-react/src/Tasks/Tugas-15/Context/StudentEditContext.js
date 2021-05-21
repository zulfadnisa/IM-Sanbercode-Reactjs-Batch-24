import React from "react";
const StudentEditContext = React.createContext();
const {Provider} = StudentEditContext
const StudentEditProvider = (props) => {
  const [editData, setEditData] = React.useState({
    id: "",
    name: "",
    course: "",
    score: "",
    isEditing: false,
  });
  return (
    <Provider value={[editData, setEditData]}>
      {props.children}
    </Provider>
  );
};
export {StudentEditContext,StudentEditProvider}
