import React from "react";
import { LoginContext } from "./LoginContext";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (params) => {
  const { component: Component, ...props } = params;
  const [isLoggedIn] = React.useContext(LoginContext);

  return (
    <Route
      {...props}
      render={(props) =>
        isLoggedIn === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default ProtectedRoute;
