import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [fetchMovie, setFetchMovie] = useState(true);
  const [idMovie, setIdMovie] = useState(null);
  const [games, setGames] = useState([]);
  const [fetchGame, setFetchGame] = useState(true);
  const [idGame, setIdGame] = useState(null);

  return (
    <DataContext.Provider
      value={[
        movies,
        setMovies,
        games,
        setGames,
        fetchMovie,
        setFetchMovie,
        idMovie,
        setIdMovie,
        fetchGame,
        setFetchGame,
        idGame,
        setIdGame,
      ]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
