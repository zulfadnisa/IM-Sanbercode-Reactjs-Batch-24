import React from "react";

export const NavbarcolorContext = React.createContext();
export const NavbarcolorProvider = (props) => {
  const [editNavbar, setEditNavbar] = React.useState(false);
  return (
    <NavbarcolorContext.Provider value={[editNavbar, setEditNavbar]}>
      {props.children}
    </NavbarcolorContext.Provider>
  );
};
