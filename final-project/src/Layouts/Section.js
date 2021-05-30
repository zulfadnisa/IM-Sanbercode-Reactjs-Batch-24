import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Main/Home";
import Login from "../Pages/Main/Login";
import Register from "../Pages/Main/Register";
import Movie from "../Pages/Movies/MovieList";
import MovieDetail from '../Pages/Movies/MovieDetail'
import Game from "../Pages/Games/GameList";
import GameDetail from '../Pages/Games/GameDetail'
import EditPassword from '../Pages/Main/Profile'
import Create from '../Pages/Create/Create'
import { UserContext } from "../Context/UserContext";


const Section = () => {
  const [user] = useContext(UserContext);
  const PrivateRoute = ({ ...rest }) => {
    if (user) {
      return <Route {...rest} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ ...rest }) => {
    if (user) {
      return <Redirect to="/" />;
    } else {
      return <Route {...rest} />;
    }
  };

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <Route exact path="/movies/:id">
          <MovieDetail/>
        </Route>
        <PrivateRoute exact path="/movies">
          <Movie />
        </PrivateRoute>
        <LoginRoute exact path="/register">
          <Register />
        </LoginRoute>
        <LoginRoute exact path="/login">
          <Login />
        </LoginRoute>
        <PrivateRoute exact path="/edit">
          <EditPassword />
        </PrivateRoute>

        <Route exact path="/games/:id">
          <GameDetail/>
        </Route>
        <PrivateRoute exact path="/games">
          <Game />
        </PrivateRoute>
        <PrivateRoute exact path="/create">
          <Create />
        </PrivateRoute>
        <PrivateRoute exact path="/create/:id">
          <Create />
        </PrivateRoute>
      </Switch>
    </section>
  );
};

export default Section;
