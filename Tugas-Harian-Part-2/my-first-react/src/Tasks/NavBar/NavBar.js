import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormPembelian from "../Tugas-9/FormPembelian";
import Tabel from "../Tugas-10/Tabel";
import ClockTimer from "../Tugas-11/ClockTimer";
import Fruits from "../Tugas-12/Fruits/Fruits";
import StudentsClass from "../Tugas-13/Students/Students";
import Students from "../Tugas-14/Students/Students";
import Home from "../Tugas-15/Students/StudentsTable";
import StudentForm from "../Tugas-15/NewStudent/NewStudent";
import { NavbarcolorContext } from "./navbarcolor";
import Button from "../UI/Button";
import "./navbar.css";

const NavBar = (props) => {
  const [editNavbar, setEditNavbar] = React.useContext(NavbarcolorContext);
  const changeNavbar = () => {
    if (editNavbar === false) {
      setEditNavbar(true);
    } else {
      setEditNavbar(false);
    }
    return;
  };
  const color =
    editNavbar === true
      ? "nav ul{background-color: #ccc}"
      : "nav ul{background-color: black}";
  console.log(editNavbar);
  return (
    <>
      <Router>
        <style>{color}</style>
        <nav>
          <ul>
            <li>
              <Link to="/task9">Task 9</Link>
            </li>
            <li>
              <Link to="/task10">Task 10</Link>
            </li>
            <li>
              <Link to="/task11">Task 11</Link>
            </li>
            <li>
              <Link to="/task12">Task 12</Link>
            </li>
            <li>
              <Link to="/task13">Task 13</Link>
            </li>
            <li>
              <Link to="/task14">Task 14</Link>
            </li>
            <li>
              <Link to="/">Task 15</Link>
            </li>
          </ul>
        </nav>
        <Button onClick={changeNavbar}>Change navbar to light theme</Button>

        <Switch>
          <Route path="/task9">
            <FormPembelian />
          </Route>
          <Route path="/task10">
            <Tabel />
          </Route>
          <Route path="/task11">
            <ClockTimer />
          </Route>
          <Route path="/task12">
            <Fruits />
          </Route>
          <Route path="/task13">
            <StudentsClass />
          </Route>
          <Route path="/task14">
            <Students />
          </Route>
          <Route path="/form">
            <StudentForm />
          </Route>
          <Route path="/form/:slug">
            <StudentForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
