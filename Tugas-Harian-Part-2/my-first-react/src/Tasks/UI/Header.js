import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={`${classes.header} ${props.className}`}>
      <h2> {props.title}</h2>
    </div>
  );
};

export default Header;
