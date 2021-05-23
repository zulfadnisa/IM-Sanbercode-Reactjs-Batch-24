import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [currentId, setCurrentId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BooksContext.Provider
      value={[books, setBooks, fetch, setFetch, currentId, setCurrentId,isLoggedIn,setIsLoggedIn]}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
