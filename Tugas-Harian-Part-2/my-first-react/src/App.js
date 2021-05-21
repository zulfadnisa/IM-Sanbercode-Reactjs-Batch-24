import React from "react";
import NavBar from "./Tasks/NavBar/NavBar";
import { NavbarcolorProvider } from "./Tasks/NavBar/navbarcolor";
import {StudentsProvider} from './Tasks/Tugas-15/Context/StudentsContext'
import {StudentEditProvider} from './Tasks/Tugas-15/Context/StudentEditContext'

function App() {
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
    <div className="App">
      <StudentsProvider toIndex={toScoreIndex}>
        <StudentEditProvider>
          <NavbarcolorProvider>
            <NavBar />
          </NavbarcolorProvider>
        </StudentEditProvider>
      </StudentsProvider>
    </div>
  );
}

export default App;
