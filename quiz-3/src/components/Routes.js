import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import BookList from "./Books/BookList";
import { BooksProvider } from "./Books/BooksContext";
import { LoginProvider, LoginContext } from "./LoginContext";

export default function App() {
  // const [isLoggedIn] = React.useContext(LoginContext);
  return (
    <>
      <Router>
        <LoginProvider>
          <BooksProvider>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/books">
                <BookList />
              </Route>
            </Switch>
          </BooksProvider>
        </LoginProvider>
      </Router>
    </>
  );
}
