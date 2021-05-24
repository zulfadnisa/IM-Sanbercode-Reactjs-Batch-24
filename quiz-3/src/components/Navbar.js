import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { LoginContext } from "./LoginContext";
import logo from '../UI/img/logo.png'
import Button from '../UI/css/Button'
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoginContext);
  React.useEffect(() => {
    const storedUseLoggedInInInformation = localStorage.getItem("isLoggedIn");
    if (storedUseLoggedInInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, [localStorage]);
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history.push("/login");
  };

  return (
    <header className={style.navbar}>
      <img src={logo}  alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isLoggedIn === false && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isLoggedIn === true && (
            <li>
              <Link to="/books">Book List Editor</Link>
            </li>
          )}
          {isLoggedIn === true && (
            <li>
              <Button onClick={logoutHandler}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
